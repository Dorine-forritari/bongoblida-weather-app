import { useState } from 'react';

// data
import tipListIS from '../data/tipsIcelandic';
import tipListEN from '../data/tipsEnglish';

// styles
import './Tips.css';

export default function Tips({ language }) {
  const [tipIS, setTipIS] = useState("");
  const [tipEN, setTipEN] = useState("");

  const generateTipIS = () => {
      setTipIS(tipListIS[Math.floor(Math.random() * 20)]);
  }

  const generateTipEN = () => {
    setTipEN(tipListEN[Math.floor(Math.random() * 20)]);
  }

  return (
    <div>
      {language
        ? <div>
            <button className="button__tips" onClick={generateTipEN}>What should I do then? <i class="fa-regular fa-face-sad-tear"></i></button>
            <p className="tip">{tipEN}</p>
          </div>
        : <div>
            <button className="button__tips" onClick={generateTipIS}>Hvað á ég þá að gera? <i class="fa-regular fa-face-sad-tear"></i></button>
            <p className="tip">{tipIS}</p>
          </div>
      }
    </div>
  )
}
