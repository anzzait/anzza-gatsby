import * as React from 'react';
import './style.scss';

import { BsShop, BsFillTelephoneFill, BsLine, BsPinMapFill, BsClock } from "react-icons/bs";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import LinkWithTracking from '@/components/LinkWithTracking.jsx'


const Access = () => {
  const gmapKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;

  const positionOfAnzza = {
    lat: 38.444521737408586,
    lng: 141.1747334999006,
  };

  return (
    <div className='access'>
      <div className='sentences'>
        <h1 className='title JP-Big30-Regular'>アクセス</h1>
        <p className='discription JP-Title18-Regular'>
          お越しの際は、LINEやお電話でご一報いただけると幸いです。<br />
          訪問を心より楽しみにしております。
        </p>
      </div>
      <div className='infomation-map'>
        <div className='infomation'>
          <div className='title JP-Title18-Bold'>店舗情報</div>
          <div className='list'>
            <table>
              <tbody>
                <tr>
                  <td><span className="icon JP-Body15-Bold"><BsShop /> 店名</span></td>
                  <td><span className="contents JP-Body15-Regular">ANZZA</span></td>
                </tr>
                <tr>
                  <td><span className="icon JP-Body15-Bold"><BsFillTelephoneFill /> TEL</span></td>
                  <td>
                    <span className="contents JP-Body15-Regular">
                      <LinkWithTracking href="tel:09072432715">090-7243-2715</LinkWithTracking></span>
                  </td>
                </tr>
                <tr>
                  <td><span className="icon JP-Body15-Bold"><BsLine /> LINE</span></td>
                  <td><span className="contents JP-Body15-Regular">
                    
                  <LinkWithTracking href="https://line.me/R/ti/p/%40086bsipf" target="_blank" rel="noopener noreferrer">
                    登録はこちらから
                  </LinkWithTracking></span></td>
                </tr>
                <tr>
                  <td><span className="icon JP-Body15-Bold"><BsPinMapFill /> 所在地</span></td>
                  <td>
                    <span className="contents JP-Body15-Regular">
                      〒981-0505<br />
                      <LinkWithTracking href="https://maps.app.goo.gl/W4WzN51XESauGvnC7" target="_blank" rel="noopener noreferrer">
                        宮城県東松島市大塩字緑ヶ丘2-7-1
                      </LinkWithTracking>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><span className="icon JP-Body15-Bold"><BsClock /> 営業時間</span></td>
                  <td>
                    <span className="contents JP-Body15-Regular">
                      【平日】13:00～17:00<br />
                      【休日・祝日】予約のみ
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='map'>
          <div className='title JP-Title18-Bold'>マップ</div>
          <div className='gmap'>
            <LoadScript googleMapsApiKey={gmapKey}>
              <GoogleMap mapContainerStyle={{ height: "100%", width: "100%" }}
                zoom={15} center={positionOfAnzza}
                onClick={() => window.location.href = "https://maps.app.goo.gl/W4WzN51XESauGvnC7"}
              >
                <Marker position={positionOfAnzza} opacity={1.0} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
