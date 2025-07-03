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

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models'
      await faceapi.nets.ssdMobilenetv1.loadFromUri(`${MODEL_URL}/ssd_mobilenetv1`)
      await faceapi.nets.ageGenderNet.loadFromUri(`${MODEL_URL}/age_gender`)
      await faceapi.nets.faceLandmark68Net.loadFromUri(`${MODEL_URL}/face_landmark_68`)
    }

    const startCamera = async () => {
      if (mode !== 'camera') return
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        videoRef.current.srcObject = stream
      } catch (err) {
        console.error('Camera error:', err)
      }
    }

    loadModels()
    startCamera()
  }, [mode])

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-white">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-6 text-purple-700 tracking-tight text-center flex items-center gap-2">
           Face Gender Detector
        </h1>

        <button
          onClick={toggleMode}
          className="mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow hover:scale-105 transition-transform"
        >
          Switch to {mode === 'camera' ? 'Upload' : 'Camera'} Mode
        </button>

        {!capturedImg && (
          <div className="w-full flex flex-col items-center">
            {mode === 'camera' ? (
              <>
                <div className="relative w-full flex justify-center mb-4">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    width="360"
                    height="270"
                    className="rounded-xl border-2 border-purple-200 shadow-lg bg-black"
                  />
                </div>
                <button
                  onClick={captureImage}
                  className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow transition"
                >
                  Capture & Detect
                </button>
              </>
            ) : (
              <>
                <label className="w-full flex flex-col items-center px-4 py-6 bg-blue-50 text-blue-700 rounded-xl shadow cursor-pointer hover:bg-blue-100 transition mb-4 border-2 border-dashed border-blue-200">
                  <span className="mb-2 text-base font-semibold">Click to upload an image</span>
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
          <div className="flex items-center gap-2 mt-6 text-blue-600">
            <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
            <span>Detecting face and gender...</span>
          </div>
        )}

        {capturedImg && (
          <>
            <div className="relative mt-4 w-full flex justify-center">
              <img src={capturedImg} alt="Detected" width="360" className="rounded-xl shadow-lg" />
              <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
            </div>

            {result && !result.error && (
              <div className="mt-6 w-full bg-purple-50 rounded-xl p-4 shadow text-center">
                <p className="text-lg font-semibold text-purple-700">
                  <span className="mr-2">Gender:</span>
                  <span className="capitalize">{result.gender}</span>
                  <span className="ml-2 text-sm text-gray-500">({result.confidence}%)</span>
                </p>
                <p className="text-lg font-semibold text-blue-700 mt-2">
                  Estimated Age: <span className="ml-1">{result.age}</span>
                </p>
              </div>
            )}

            {result?.error && (
              <div className="text-red-600 mt-6 font-semibold bg-red-50 rounded-xl p-3 shadow text-center">
                {result.error}
              </div>
            )}

            <div className="flex gap-4 mt-8 w-full justify-center">
              <button
                onClick={retake}
                className="flex-1 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-white font-bold shadow transition"
              >
                Retake
              </button>
              <button
                onClick={downloadImage}
                className="flex-1 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold shadow transition"
              >
                Download Image
              </button>
            </div>
          </>
        )}
      </div>
      <footer className="mt-8 text-gray-400 text-xs">
        Powered by face-api.js &middot; Built by IFearAids
      </footer>
    </div>
  )
}
