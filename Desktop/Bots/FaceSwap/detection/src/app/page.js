'use client'
import React, { useEffect, useRef, useState } from 'react'
import * as faceapi from 'face-api.js'

export default function Home() {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const imageRef = useRef(null)

  const [capturedImg, setCapturedImg] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState('camera') // 'camera' or 'upload'
  const [cameraActive, setCameraActive] = useState(false)

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models'
      await faceapi.nets.ssdMobilenetv1.loadFromUri(`${MODEL_URL}/ssd_mobilenetv1`)
      await faceapi.nets.ageGenderNet.loadFromUri(`${MODEL_URL}/age_gender`)
      await faceapi.nets.faceLandmark68Net.loadFromUri(`${MODEL_URL}/face_landmark_68`)
    }
    loadModels()
  }, [])

  useEffect(() => {
    const startCamera = async () => {
      if (mode !== 'camera' || !cameraActive) return
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        videoRef.current.srcObject = stream
      } catch (err) {
        console.error('Camera error:', err)
      }
    }
    startCamera()
    // Cleanup: stop camera when not active
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks()
        tracks.forEach(track => track.stop())
        videoRef.current.srcObject = null
      }
    }
  }, [mode, cameraActive])

  const handleDetection = async (dataUrl) => {
    setCapturedImg(dataUrl)
    setResult(null)
    setLoading(true)

    const img = await faceapi.fetchImage(dataUrl)
    const detection = await faceapi
      .detectSingleFace(img)
      .withAgeAndGender()

    if (detection) {
      setResult({
        gender: detection.gender,
        confidence: (detection.genderProbability * 100).toFixed(2),
        age: detection.age.toFixed(0),
      })

      faceapi.matchDimensions(canvasRef.current, {
        width: img.width,
        height: img.height,
      })

      faceapi.draw.drawDetections(canvasRef.current, detection)
    } else {
      setResult({ error: 'No face detected. Try again.' })
    }

    setLoading(false)
  }

  const captureImage = () => {
    const video = videoRef.current
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0)
    const dataUrl = canvas.toDataURL('image/jpeg')
    handleDetection(dataUrl)
    setCameraActive(false)
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      const dataUrl = reader.result
      imageRef.current.src = dataUrl
      handleDetection(dataUrl)
    }
    reader.readAsDataURL(file)
  }

  const retake = () => {
    setCapturedImg(null)
    setResult(null)
    setCameraActive(false)
    canvasRef.current?.getContext('2d')?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
  }

  const downloadImage = () => {
    const link = document.createElement('a')
    link.href = capturedImg
    link.download = 'detected-face.jpg'
    link.click()
  }

  const toggleMode = () => {
    setMode((prev) => (prev === 'camera' ? 'upload' : 'camera'))
    retake()
  }

  const openCamera = () => {
    setCameraActive(true)
  }

  return (
    <div className="flex flex-col font-plus items-center justify-center min-h-screen w-full bg-gradient-to-br from-[#0a1836] via-[#162447] to-[#1f4068] p-0">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-200 tracking-tight text-center flex items-center gap-2 mt-8 drop-shadow">
        Face Gender Detector
      </h1>

      <button
        onClick={toggleMode}
        className="mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform flex items-center gap-2 text-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Switch to {mode === 'camera' ? 'Upload' : 'Camera'} Mode
      </button>

      {!capturedImg && (
        <div className="w-full flex flex-col items-center">
          {mode === 'camera' ? (
            <>
              {!cameraActive ? (
                <button
                  onClick={openCamera}
                  className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-500 shadow-lg hover:scale-110 hover:shadow-xl transition mb-6"
                  aria-label="Open Camera"
                >
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="2.5" />
                    <rect x="4" y="7" width="16" height="10" rx="4" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                </button>
              ) : (
                <>
                  <div className="relative w-full flex justify-center mb-6">
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      playsInline
                      width="480"
                      height="360"
                      className="rounded-2xl border-2 border-blue-900 shadow-xl bg-black"
                    />
                  </div>
                  <button
                    onClick={captureImage}
                    className="w-72 max-w-full py-4 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition text-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2.5" />
                    </svg>
                    Take Picture
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <label className="w-72 max-w-full flex flex-col items-center px-4 py-8 bg-blue-900/60 text-blue-200 rounded-2xl shadow cursor-pointer hover:bg-blue-800/80 transition mb-6 border-2 border-dashed border-blue-700">
                <span className="mb-2 text-lg font-semibold">Click to upload an image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  className="hidden"
                />
              </label>
              <img
                ref={imageRef}
                alt="Upload Preview"
                hidden
              />
            </>
          )}
        </div>
      )}

      {loading && (
        <div className="flex items-center gap-2 mt-8 text-blue-300 text-lg">
          <svg className="animate-spin h-6 w-6 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
          <span>Detecting face and gender...</span>
        </div>
      )}

      {capturedImg && (
        <>
          <div className="relative mt-8 w-full flex justify-center">
            <img src={capturedImg} alt="Detected" width="480" className="rounded-2xl shadow-xl border-2 border-blue-900 bg-blue-950/80" />
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
          </div>

          {result && !result.error && (
            <div className="mt-8 w-96 max-w-full bg-blue-900/70 rounded-2xl p-6 shadow text-center">
              <p className="text-xl font-semibold text-blue-200">
                <span className="mr-2">Gender:</span>
                <span className="capitalize">{result.gender}</span>
                <span className="ml-2 text-base text-blue-400">({result.confidence}%)</span>
              </p>
              <p className="text-xl font-semibold text-blue-300 mt-2">
                Estimated Age: <span className="ml-1">{result.age}</span>
              </p>
            </div>
          )}

          {result?.error && (
            <div className="text-red-400 mt-8 font-semibold bg-red-900/60 rounded-2xl p-4 shadow text-center w-96 max-w-full">
              {result.error}
            </div>
          )}

          <div className="flex gap-6 mt-10 w-96 max-w-full justify-center">
            <button
              onClick={retake}
              className="flex-1 py-4 rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-white font-bold shadow-lg hover:shadow-xl transition text-xl"
            >
              Retake
            </button>
            <button
              onClick={downloadImage}
              className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition text-xl"
            >
              Download Image
            </button>
          </div>
        </>
      )}

      <footer className="mt-16 text-blue-400 text-sm mb-4">
        Powered by face-api.js &middot; Built by IFearAids
      </footer>
    </div>
  )
}

