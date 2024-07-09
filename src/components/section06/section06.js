import * as React from 'react';
import * as styles from './section06.module.css';

const Section06 = () => {
  return (
    <section id="section06" className={styles.section}>
      <div className={styles.container}>
          
            
            <div className={styles.title}>
              Creative Space
            </div>
            <div className={styles.subtitle}>
              地域に開かれた<br />
              コミュニティースペース
            </div>
            <div className={styles.text}>
              <div className={styles.textRow}>
                土間内の空間には、誰でも利用できる図書茶室がある他、地元のアーティストと協力したワークショップや、全国各地からお招きした料理人との交流などたくさんのイベントをご用意しています。持ち込みの企画やリクエストも承っておりますのでお気軽にお問い合わせください。
              </div>
              <div className={styles.texta}>
                <a href='/'>View more</a>
              </div>
            </div>

            <div className={styles.pictureRight}>
              <img src="images/section06PictureRight.webp" alt="rightPicture" />
            </div>
            <div className={styles.pictureLeft}>
              <img src="images/section06PictureLeft.webp" alt="leftPicture" />
            </div>
          
      </div>
    </section>
  );
};

export default Section06;
