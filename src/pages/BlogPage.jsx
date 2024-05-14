import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class BlogPage extends Component {
  render() {
    return (
     <><div>
        <Header />
        <div className='BlogRow2 flex justify-center gap-8 pt-14'>
          <div className='BlogCard flex '>
            <div className='ContentCard bg-[#FFFFFF] flex flex-col w-[470px] h-[606px] drop-shadow-xl'>
              <div className='CardFixedImg '>
                <div className='ImageTextCard absolute ml-4 mt-4 text-white bg-[#E74040] rounded px-2.5 font-bold text-sm'>NEW</div>
                <img className='h-[300px] w-[470px]' src="https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDPYelTfCxZdPvh88tNIRvtduECytc2Vc73cMXzKGB05HeXTJ8SzOcNMGtKY5LQmkAvHIgBCj2qnjAoojoeehT1EHCf57VznRiwfIQCziemUTe8KqOGynN1e2GS-yki7F-knQd-3YlBUD3gRERtjotYL6vU8dP5XjtesFC3Fuh5TpnZJgxkbZ26~XqNMRPT5emhCoSd81KPHR20yl4NcCIliCk4QaYEUNIxOOmD7Na3leCz447u6CDnsp3ax2dXNgRIzKMSn0irl~6K9Is20IrG~buNCqVBaodFoWY2XmcdUumLc7ZcmmnYMZkhFCXlrrjDdvctWWpdwuOeCCMDz7g__" alt="" />
              </div>
              <div className='CardFixedText flex flex-col items-start gap-2.5 h-[306px] w-[465px] pl-8 justify-evenly'>
                <div className='CardHeader1 flex gap-4'>
                  <p className='text-xs text-[#8EC2F2] font-normal'>Google</p>
                  <p className='text-xs text-[#737373] font-normal'>Trending</p>
                  <p className='text-xs text-[#737373] font-normal'>New</p>
                </div>
                <h4 className='w-[247px] text-xl text-[#252B42] font-bold'>Loudest à la Madison #1
                  (L'integral)</h4>
                <p className='w-[280px] font-normal text-sm text-[#737373]'>We focus on ergonomics and meeting
                  you where you work. It's only a
                  keystroke away.</p>
                <div className='CardComments flex  gap-52'>
                  <div className='TimeIcon flex gap-1.5'>
                    <i class="fa-regular fa-clock"></i>
                    <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                  </div>
                  <div className='TimeIcon2 flex gap-1.5'>
                    <i class="fa-solid fa-chart-line "></i>
                    <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                  </div>
                </div>
                <div className='LearnMore'>
                  <p className='text-sm font-bold text-[#737373]'>Learn More <i class="fa-solid fa-angle-right"></i></p>

                </div>
              </div>
            </div>
          </div>
          <div className='BlogCard2'>
            <div className='BlogCard flex pb-28'>
              <div className='ContentCard1 bg-[#FFFFFF] flex flex-col w-[470px] h-[606px] drop-shadow-xl'>
                <div className='CardFixedImg '>
                  <div className='ImageTextCard absolute ml-4 mt-4 text-white bg-[#E74040] rounded px-2.5 font-bold text-sm'>NEW</div>
                  <img className='h-[300px] w-[470px]' src="https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDPYelTfCxZdPvh88tNIRvtduECytc2Vc73cMXzKGB05HeXTJ8SzOcNMGtKY5LQmkAvHIgBCj2qnjAoojoeehT1EHCf57VznRiwfIQCziemUTe8KqOGynN1e2GS-yki7F-knQd-3YlBUD3gRERtjotYL6vU8dP5XjtesFC3Fuh5TpnZJgxkbZ26~XqNMRPT5emhCoSd81KPHR20yl4NcCIliCk4QaYEUNIxOOmD7Na3leCz447u6CDnsp3ax2dXNgRIzKMSn0irl~6K9Is20IrG~buNCqVBaodFoWY2XmcdUumLc7ZcmmnYMZkhFCXlrrjDdvctWWpdwuOeCCMDz7g__" alt="" />
                </div>
                <div className='CardFixedText flex flex-col items-start gap-2.5 h-[306px] w-[465px] pl-8 justify-evenly'>
                  <div className='CardHeader1 flex gap-4'>
                    <p className='text-xs text-[#8EC2F2] font-normal'>Google</p>
                    <p className='text-xs text-[#737373] font-normal'>Trending</p>
                    <p className='text-xs text-[#737373] font-normal'>New</p>
                  </div>
                  <h4 className='w-[247px] text-xl text-[#252B42] font-bold'>Loudest à la Madison #1
                    (L'integral)</h4>
                  <p className='w-[280px] font-normal text-sm text-[#737373]'>We focus on ergonomics and meeting
                    you where you work. It's only a
                    keystroke away.</p>
                  <div className='CardComments flex  gap-52'>
                    <div className='TimeIcon flex gap-1.5'>
                      <i class="fa-regular fa-clock"></i>
                      <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                    </div>
                    <div className='TimeIcon2 flex gap-1.5'>
                      <i class="fa-solid fa-chart-line "></i>
                      <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                    </div>
                  </div>
                  <div className='LearnMore'>
                    <p className='text-sm font-bold text-[#737373]'>Learn More <i class="fa-solid fa-angle-right"></i></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          
              </div>
            </div>
            <div className='BlogRow2 flex justify-center gap-8 pt-14'>
          <div className='BlogCard flex '>
            <div className='ContentCard bg-[#FFFFFF] flex flex-col w-[470px] h-[606px] drop-shadow-xl'>
              <div className='CardFixedImg '>
                <div className='ImageTextCard absolute ml-4 mt-4 text-white bg-[#E74040] rounded px-2.5 font-bold text-sm'>NEW</div>
                <img className='h-[300px] w-[470px]' src="https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDPYelTfCxZdPvh88tNIRvtduECytc2Vc73cMXzKGB05HeXTJ8SzOcNMGtKY5LQmkAvHIgBCj2qnjAoojoeehT1EHCf57VznRiwfIQCziemUTe8KqOGynN1e2GS-yki7F-knQd-3YlBUD3gRERtjotYL6vU8dP5XjtesFC3Fuh5TpnZJgxkbZ26~XqNMRPT5emhCoSd81KPHR20yl4NcCIliCk4QaYEUNIxOOmD7Na3leCz447u6CDnsp3ax2dXNgRIzKMSn0irl~6K9Is20IrG~buNCqVBaodFoWY2XmcdUumLc7ZcmmnYMZkhFCXlrrjDdvctWWpdwuOeCCMDz7g__" alt="" />
              </div>
              <div className='CardFixedText flex flex-col items-start gap-2.5 h-[306px] w-[465px] pl-8 justify-evenly'>
                <div className='CardHeader1 flex gap-4'>
                  <p className='text-xs text-[#8EC2F2] font-normal'>Google</p>
                  <p className='text-xs text-[#737373] font-normal'>Trending</p>
                  <p className='text-xs text-[#737373] font-normal'>New</p>
                </div>
                <h4 className='w-[247px] text-xl text-[#252B42] font-bold'>Loudest à la Madison #1
                  (L'integral)</h4>
                <p className='w-[280px] font-normal text-sm text-[#737373]'>We focus on ergonomics and meeting
                  you where you work. It's only a
                  keystroke away.</p>
                <div className='CardComments flex  gap-52'>
                  <div className='TimeIcon flex gap-1.5'>
                    <i class="fa-regular fa-clock"></i>
                    <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                  </div>
                  <div className='TimeIcon2 flex gap-1.5'>
                    <i class="fa-solid fa-chart-line "></i>
                    <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                  </div>
                </div>
                <div className='LearnMore'>
                  <p className='text-sm font-bold text-[#737373]'>Learn More <i class="fa-solid fa-angle-right"></i></p>

                </div>
              </div>
            </div>
          </div>
          <div className='BlogCard2'>
            <div className='BlogCard flex pb-28'>
              <div className='ContentCard1 bg-[#FFFFFF] flex flex-col w-[470px] h-[606px] drop-shadow-xl'>
                <div className='CardFixedImg '>
                  <div className='ImageTextCard absolute ml-4 mt-4 text-white bg-[#E74040] rounded px-2.5 font-bold text-sm'>NEW</div>
                  <img className='h-[300px] w-[470px]' src="https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDPYelTfCxZdPvh88tNIRvtduECytc2Vc73cMXzKGB05HeXTJ8SzOcNMGtKY5LQmkAvHIgBCj2qnjAoojoeehT1EHCf57VznRiwfIQCziemUTe8KqOGynN1e2GS-yki7F-knQd-3YlBUD3gRERtjotYL6vU8dP5XjtesFC3Fuh5TpnZJgxkbZ26~XqNMRPT5emhCoSd81KPHR20yl4NcCIliCk4QaYEUNIxOOmD7Na3leCz447u6CDnsp3ax2dXNgRIzKMSn0irl~6K9Is20IrG~buNCqVBaodFoWY2XmcdUumLc7ZcmmnYMZkhFCXlrrjDdvctWWpdwuOeCCMDz7g__" alt="" />
                </div>
                <div className='CardFixedText flex flex-col items-start gap-2.5 h-[306px] w-[465px] pl-8 justify-evenly'>
                  <div className='CardHeader1 flex gap-4'>
                    <p className='text-xs text-[#8EC2F2] font-normal'>Google</p>
                    <p className='text-xs text-[#737373] font-normal'>Trending</p>
                    <p className='text-xs text-[#737373] font-normal'>New</p>
                  </div>
                  <h4 className='w-[247px] text-xl text-[#252B42] font-bold'>Loudest à la Madison #1
                    (L'integral)</h4>
                  <p className='w-[280px] font-normal text-sm text-[#737373]'>We focus on ergonomics and meeting
                    you where you work. It's only a
                    keystroke away.</p>
                  <div className='CardComments flex  gap-52'>
                    <div className='TimeIcon flex gap-1.5'>
                      <i class="fa-regular fa-clock"></i>
                      <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                    </div>
                    <div className='TimeIcon2 flex gap-1.5'>
                      <i class="fa-solid fa-chart-line "></i>
                      <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                    </div>
                  </div>
                  <div className='LearnMore'>
                    <p className='text-sm font-bold text-[#737373]'>Learn More <i class="fa-solid fa-angle-right"></i></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          
              </div>
              <div className='BlogRow2 flex justify-center gap-8 pt-14'>
          <div className='BlogCard flex '>
            <div className='ContentCard bg-[#FFFFFF] flex flex-col w-[470px] h-[606px] drop-shadow-xl'>
              <div className='CardFixedImg '>
                <div className='ImageTextCard absolute ml-4 mt-4 text-white bg-[#E74040] rounded px-2.5 font-bold text-sm'>NEW</div>
                <img className='h-[300px] w-[470px]' src="https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDPYelTfCxZdPvh88tNIRvtduECytc2Vc73cMXzKGB05HeXTJ8SzOcNMGtKY5LQmkAvHIgBCj2qnjAoojoeehT1EHCf57VznRiwfIQCziemUTe8KqOGynN1e2GS-yki7F-knQd-3YlBUD3gRERtjotYL6vU8dP5XjtesFC3Fuh5TpnZJgxkbZ26~XqNMRPT5emhCoSd81KPHR20yl4NcCIliCk4QaYEUNIxOOmD7Na3leCz447u6CDnsp3ax2dXNgRIzKMSn0irl~6K9Is20IrG~buNCqVBaodFoWY2XmcdUumLc7ZcmmnYMZkhFCXlrrjDdvctWWpdwuOeCCMDz7g__" alt="" />
              </div>
              <div className='CardFixedText flex flex-col items-start gap-2.5 h-[306px] w-[465px] pl-8 justify-evenly'>
                <div className='CardHeader1 flex gap-4'>
                  <p className='text-xs text-[#8EC2F2] font-normal'>Google</p>
                  <p className='text-xs text-[#737373] font-normal'>Trending</p>
                  <p className='text-xs text-[#737373] font-normal'>New</p>
                </div>
                <h4 className='w-[247px] text-xl text-[#252B42] font-bold'>Loudest à la Madison #1
                  (L'integral)</h4>
                <p className='w-[280px] font-normal text-sm text-[#737373]'>We focus on ergonomics and meeting
                  you where you work. It's only a
                  keystroke away.</p>
                <div className='CardComments flex  gap-52'>
                  <div className='TimeIcon flex gap-1.5'>
                    <i class="fa-regular fa-clock"></i>
                    <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                  </div>
                  <div className='TimeIcon2 flex gap-1.5'>
                    <i class="fa-solid fa-chart-line "></i>
                    <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                  </div>
                </div>
                <div className='LearnMore'>
                  <p className='text-sm font-bold text-[#737373]'>Learn More <i class="fa-solid fa-angle-right"></i></p>

                </div>
              </div>
            </div>
          </div>
          <div className='BlogCard2'>
            <div className='BlogCard flex pb-28'>
              <div className='ContentCard1 bg-[#FFFFFF] flex flex-col w-[470px] h-[606px] drop-shadow-xl'>
                <div className='CardFixedImg '>
                  <div className='ImageTextCard absolute ml-4 mt-4 text-white bg-[#E74040] rounded px-2.5 font-bold text-sm'>NEW</div>
                  <img className='h-[300px] w-[470px]' src="https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDPYelTfCxZdPvh88tNIRvtduECytc2Vc73cMXzKGB05HeXTJ8SzOcNMGtKY5LQmkAvHIgBCj2qnjAoojoeehT1EHCf57VznRiwfIQCziemUTe8KqOGynN1e2GS-yki7F-knQd-3YlBUD3gRERtjotYL6vU8dP5XjtesFC3Fuh5TpnZJgxkbZ26~XqNMRPT5emhCoSd81KPHR20yl4NcCIliCk4QaYEUNIxOOmD7Na3leCz447u6CDnsp3ax2dXNgRIzKMSn0irl~6K9Is20IrG~buNCqVBaodFoWY2XmcdUumLc7ZcmmnYMZkhFCXlrrjDdvctWWpdwuOeCCMDz7g__" alt="" />
                </div>
                <div className='CardFixedText flex flex-col items-start gap-2.5 h-[306px] w-[465px] pl-8 justify-evenly'>
                  <div className='CardHeader1 flex gap-4'>
                    <p className='text-xs text-[#8EC2F2] font-normal'>Google</p>
                    <p className='text-xs text-[#737373] font-normal'>Trending</p>
                    <p className='text-xs text-[#737373] font-normal'>New</p>
                  </div>
                  <h4 className='w-[247px] text-xl text-[#252B42] font-bold'>Loudest à la Madison #1
                    (L'integral)</h4>
                  <p className='w-[280px] font-normal text-sm text-[#737373]'>We focus on ergonomics and meeting
                    you where you work. It's only a
                    keystroke away.</p>
                  <div className='CardComments flex  gap-52'>
                    <div className='TimeIcon flex gap-1.5'>
                      <i class="fa-regular fa-clock"></i>
                      <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                    </div>
                    <div className='TimeIcon2 flex gap-1.5'>
                      <i class="fa-solid fa-chart-line "></i>
                      <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                    </div>
                  </div>
                  <div className='LearnMore'>
                    <p className='text-sm font-bold text-[#737373]'>Learn More <i class="fa-solid fa-angle-right"></i></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          
              </div>
            
         
      <Footer /></>
       
          
       
        
      
    )
  }
}
