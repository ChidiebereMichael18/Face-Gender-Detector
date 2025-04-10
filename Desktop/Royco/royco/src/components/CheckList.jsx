import React from 'react'
import {CheckCircle} from 'lucide-react';
function CheckList() {
  return (
    <div>
        <div>
            <h2 className='text-lg font-mont'>CHECK LIST</h2>
            <div className='space-y-2'>
                <div className='flex flex-row'>
                    <CheckCircle size={16} className='text-bg mt-1 mr-1'/>
                    <h3 className='text-blue font-lexend'>WareHousing</h3>
                </div>
                <div className='flex flex-row'>
                    <CheckCircle size={16} className='text-bg mt-1 mr-1'/>
                    <h3 className='text-blue font-lexend'>Transportation</h3>
                </div>
                <div className='flex flex-row'>
                    <CheckCircle size={16} className='text-bg mt-1 mr-1'/>
                    <h3 className='text-blue font-lexend'>Customs</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckList