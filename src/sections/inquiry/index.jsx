import * as React from 'react';
import './style.scss';
import { StaticImage } from 'gatsby-plugin-image'

const Inquiry = () => {
  return (
    <div className='inquiry'>
      <div className='sentences'>
        <h1 className='title JP-Big30-Regular'>お問い合わせ</h1>
        <p className='discription JP-Title18-Regular'>
          「デザインはまだ浮かんでいないけど…」<br/>
          「購入を迷っている途中だけれど…」<br/>
          「実際の革の色や質感を感じたい」<br/>
          「カスタマイズやオプションについて詳しく知りたい」<br/>
          <br/>
          オーダーメイドの旅は、多くの疑問や願いが交錯するもの。そのすべてに、私たちANZZAが心から対応いたします。<br/>
          <br/>
          どんな小さなことでも、あなたの思いをお聞かせください。LINEでのお問い合わせを、心よりお待ちしております。<br/>
        </p>
      </div>

      <div className='symbol-img-flame'>
        <StaticImage 
          src='../../images/ShopInside.jpg' alt="ANZZAの店内"
          layout="constrained" 
          width={400}
          height={266}
        />
      </div>

    </div>
  );
};




export default Inquiry;
