import * as React from 'react';
import './style.scss';
import { StaticImage } from 'gatsby-plugin-image'

const Aboutus = () => {
  return (
    <div className='aboutus'>
      <div className='sentences'>
        <h1 className='title JP-Big30-Regular'>ANZZAについて</h1>
        <p className='discription JP-Title18-Regular'>
          深い歴史を持つ東松島の大地から生まれたANZZAは、それぞれのバッグが一つの物語を持ち、一人の職人が革の選定から仕上げまで心を込めて手掛けます。<br/>
          <br/>
          私たちの最大の特長は、お客様の"ご希望"を形にすること。特別な日や大切な人へのギフトなど、あなたの願いを叶えるアイテムを提供いたします。<br/>
          <br/>
          ANZZAで、独特の魅力と深みを持った、あなただけの革製品を見つけてください。<br/>
        </p>
      </div>
      <div className='symbol-img-flame'>

        <StaticImage 
          src='../../images/ShopFront.jpg' alt="ANZZAの工房"
          layout="constrained" 
          width={400}
          height={266}
        />

      </div>
    </div>
  );
};




export default Aboutus;
