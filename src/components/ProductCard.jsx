import React, { useState } from 'react';
import "../index.css"
const images = {
  Blue: "https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmfHP--vTNkIosajBlttlcHUCHC1wy23RabxeVVpem7thxFSuC-Qmjsj~HqDAmUDMWb-jWqNibiHcEKa1b7v1iNzZACxMBbizO-arVwdV1etMellGh2F3SqNZVj8~SV0F6r2rFVLtyeCBmwmeFm5v-EHcFfUele57dyISB0nyzF-Sx2g-5zPeqEZi22Y3Wp9-kS8Nv5Q7Z97XXQ~oYvDAbHkG0iI7gClm4nmB7eF0BPawBiymMMTrjO5SPOaViQknAncP7ahne3ShG5gfs6aFQO-fyiXSFZsx~4LYhq5a1BN8lpRWpbDWwkhsz75Rsm7sEMHKflWIbd~Xn16ojXtRA__",
  Green: "https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HsJaicJzN7NY0h0scJHCftCxwz3wLCCgQzZ~o~iAtvQSZuoXJEH8r3IMiGUBMpe5pMuGEjhu0hEGH~YCBfkir~j9UmaSXvvvh24yVEsD9jLrULGtoWSdRvAU36khAEtziehojC7OmuAYtDI9cXHGkkUqkIa~457nEbXAe-8rZoBt~LEDY~F~XNNvWlvsUSUbiT4f46D-O6YV1QQY90y5ZmW~VB-CrKgk0BrRSDlRIRwV0TpD~r1EoJk6T6xA8cqRgB5ffLBI6W2siw1ruk89NCw3IjjSklWYOja~Nf9fgU-vavHN3ir2dMeQcS7fXKko7i4QQh4NZ029Gn~1RcHDyg__",
  Orange: "https://s3-alpha-sig.figma.com/img/3e7f/7eaf/d5316e4fa827cf3570a2a8c7855d5a94?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMpNTMSl9s9AnMBpKhQQe7a4HoAW42vMZUkDt8b1m~LutqrXokxFxNsep~C6rreFenC1d~OWshEtW6hFq415PkeN8hN932U1UHK2uTyIl-H1weeJjZRfNYk59tCtVvX5wVLGQ1RTR9Oz-QG35dx404RzyBWmwNZl-wHC6uXPIGpjTbokC4pkNNLFNUkjsPn5F7gt7R4GU3yF9ZCt-e5w7vlyUoBFSVUxnIHRTzVGnFmaV~NAJo1AcMj3IfapUotlJIPxG2~fxqqJ-38bjcIuPw5e4uS0oWLhhO1SmaE7ExEdzd0nZaUo2BUqNp5rKb3Nc30mVDmpqP2AbdrPsyz59g__",
  Black: "https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MqrD34rJBR~F-2J4cVOYT7EMTMCDp771afP81I66-sqBtFlZMLHl6X0Y5mYjWtHMIcdD-u0nDoV6ZOhQiqjweoDWONC073ADdX9fIw37~FLsOHKJzfiLQV3MOCUxU10rSdTZMX2id5csU0cz5BUa9NGG-Y1OANo2v~1XqYWYiXUHbT8G1TJxqb9KOpOVcXX07pEnrVyVbun79dGSyHT5hHnPd1oaRrpkay4B0GEF1EpbyIkDipO0iF0cEUD07PeA7ywM6865JL7oO52t7lwA1pGo2VBqSqJjZ65hymXb6z1DOyqMfb6ekacEc0dqu-2waE2xGTyOoHa-KD4nCrnwrg__"
};

export default function ProductCardComponent() {
  const [selectedColor, setSelectedColor] = useState('Blue');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className='GroupTabProduct flex flex-col items-center'>
      <div className='ItemCard flex flex-col items-center'>
        <div className='ItemCard1 h-[300px] w-[239px] '>
          <img src={images[selectedColor]} alt="" />
        </div>
        <div className='ItemCard2 gap-2.5 flex flex-col items-center'>
          <h5 className='font-bold text-base'>Graphic Design</h5>
          <a href="Category"><p className='font-bold text-sm text-[#737373]'>English Department</p></a>
          <div className='Pricess flex gap-1.5 py-1.5 px-1 text-base font-bold'>
            <p className='text-[#BDBDBD]'>$16.48</p>
            <p className='text-[#23856D]'>$6.48</p>
          </div>
        </div>
      </div>
      <fieldset className='flex gap-1.5'>
        <legend className="sr-only">Select Color</legend>
        <div className="flex items-center mb-4">
          <input
            id="color-option-1"
            type="radio"
            name="color"
            value="Blue"
            className="w-4 h-4 bg-[#23A6F0]"
            checked={selectedColor === 'Blue'}
            onChange={handleColorChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            id="color-option-2"
            type="radio"
            name="color"
            value="Green"
            className="w-4 h-4 bg-[#23856D]"
            checked={selectedColor === 'Green'}
            onChange={handleColorChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            id="color-option-3"
            type="radio"
            name="color"
            value="Orange"
            className="w-4 h-4 bg-[#E77C40]"
            checked={selectedColor === 'Orange'}
            onChange={handleColorChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            id="color-option-4"
            type="radio"
            name="color"
            value="Black"
            className="w-4 h-4 bg-[#252B42]"
            checked={selectedColor === 'Black'}
            onChange={handleColorChange}
          />
        </div>
      </fieldset>
    </div>
  );
}
