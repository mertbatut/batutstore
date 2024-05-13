import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Team extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='TeamMain flex flex-col items-center py-28 gap-28'>
            <div className='TeamRow1 flex flex-col items-center'>
                <div className='TeamText1'> 
                <h2 className='text-4xl font-bold text-[#252B42]'>Meet Our Team</h2>        
                </div>
                <div className='TeamText2'>
                    <p className='text-sm font-normal text-[#737373] w-[469px]'>
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                    </p>
                </div>
            </div>
            <div className='TeamRow2 flex gap-8'>
                <div className='ProfileCard1 w-[230px] py-8 px-10 bg-[#FFFFFF] border border-indigo-600'>
                    <div className='CardFounder flex flex-col items-center gap-2.5'>
                        <img className='w-[128px] h-[128px] rounded-full' src="https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qwxx4WLbcwEStjaNMRiFdgCEW5CxG~Z~aw7LeiYiJ5M3RXBQJl~Up44oncCRe0Z9cDEehjXD8tZ7q4WprTcIWVleoZzViH3PNiPy7X1x-DYGWzNtxf5kPcm4BFAP9A2NjDdB4asLuLZmG8SAQBKI~DYwTbdpVu0Jem0i2avu0Y8mHq-QrpYCVsiFpcoukrI7GHOx-wCBSC3RODsWGu2WXJMDUFDqvU~fktmsOGUwAPxFcBFDHm-jfWoC7~D2G4p7x9q1FkBSM3sTPLxvr4Vfh2uL-nIRZOpct3KIxj11-pre-IDA66H1MtRfXYOSyQqhrd2eL8w0dNsDqaroCZqhkg__" alt="" />
                        <h6 className='text-sm font-bold text-[#23A6F0]'>Founder</h6>
                        <h5 className='text-base font-bold text-[#252B42]'>Kristin Watson</h5>
                        <p className='w-[147px] h-[40px] text-sm text-[#737373] font-normal '>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
                <div className='ProfileCard2  w-[230px] py-8 px-10 bg-[#FFFFFF] border border-indigo-600'>
                <div className='CardFounder flex flex-col items-center gap-2.5 '>
                        <img className='w-[128px] h-[128px] rounded-full' src="https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BwJD2q2TLcNPfZ-Krv39yQR0J5~3rbyfixh7MlJkIMrC3V7k0BN~d-LoyKbbtvCBilsx9azJhMgEpwoDjGYinYb4CWp9SMRXkfnhNyT4Zn8r9du2lkY0zASal2F3xJdcgAcwsTY0qL-W2BxaRNJ7CeIZSgoDfbPmdHIYZY8Ks01AS4cTN6p2oEkWNQRgUyCOKebg2yWbGFJ3esfEPHwGk5H120r~dY2fJGcmBKsabYhIXT5Hvcbbf6mFjvNTva6d8Se-KEBIPiAogwlV6Adnvikm10AgchrKqtqTN6rESmjLQCgFbk8vs2TQSqcYgwHYbsvApZgbIOHl9sSah2ckxg__" alt="" />
                        <h6  className='text-sm font-bold text-[#23A6F0]'>Founder</h6>
                        <h5 className='text-base font-bold text-[#252B42]'>Floyd Miles</h5>
                        <p className='w-[147px] h-[40px] text-sm'>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
                <div className='ProfileCard3  w-[230px] py-8 px-10 bg-[#FFFFFF] border border-indigo-600'>
                <div className='CardFounder flex flex-col items-center gap-2.5'>
                        <img className='w-[128px] h-[128px] rounded-full' src="https://s3-alpha-sig.figma.com/img/aac6/b1b1/8acee54880feb3c84cfacdb2ff89076d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J95KJJxqB~GL-85p0T9rn0I5vDTv8Bu52biVabOkkDFD~yX9HRi8cyL-ofl2EClulbx2hgySZEr1GHzwp2Hpz-iYNSyEv0CO2GHILtULt8c~SWhboW2AWO~ZQWFm0-vHLJPyao7CrezBv16dJnToboXFRkmA0JfszclCf57CiwujiVTQoThDFRmS87fqQB5WX~-PxCPvBYA-SVUh7QSgfaJ0q6ZcBIxkSznQK7DY0za6bmSzEyjvuVsNqwTz-8Wk5FQ-v6BaN-jnYhzlh13jdj3HkSzM1wIHbl6WPRRKdvN5qXeugtL0PkCwylcGgUO88YOMtfAjk1h6K8-XPE3OMg__" alt="" />
                        <h6  className='text-sm font-bold text-[#23A6F0]'>Founder</h6>
                        <h5 className='text-base font-bold text-[#252B42]'>Eleanor Pena</h5>
                        <p className='w-[147px] h-[40px] text-sm'>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
                <div className='ProfileCard4  w-[230px] py-8 px-10 bg-[#FFFFFF] border border-indigo-600'>
                <div className='CardFounder flex flex-col items-center gap-2.5'>
                        <img className='w-[128px] h-[128px] rounded-full' src="https://s3-alpha-sig.figma.com/img/08e4/55fe/112b5aa889f8276e41832a747a9bda45?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VXRaMjbmv0ufheUVsq5uViz2YDJfOxSAiN~vxMFeWAc6t44pHvwHQIHus~3~NiCkfqaSnDYIK9~JffLLLy9oAup3E73TjPCEcOTY5GaTaDPvoDEGpANV-8ck17TeFqncjooqNegS1mOBFPLbO9X4ThAm4Q3snTDmmuczXqR-25bN5ujjOoqcGj2KLVzKWTgXiZf~bHvTMorJIs2Qvjl4CmenvUofiH4QXK73igCwEh84680~85Mxp6vN4fxJwjTsu-xzOuWGErNBNZUIIr6s8LwlIJf9tvLuAkG8~~kwBIIjofvYHiDKTHkY0gbW3MqAdjna-aMRcJVaVX5LzCpznA__" alt="" />
                        <h6  className='text-sm font-bold text-[#23A6F0]'>Founder</h6>
                        <h5 className='text-base font-bold text-[#252B42]'>Jane Cooper</h5>
                        <p className='w-[147px] h-[40px] text-sm'>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
