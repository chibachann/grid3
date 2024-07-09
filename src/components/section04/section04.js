import * as React from 'react';
import * as styles from './section04.module.css';

const Section04 = () => {
  return (
    <section id="section04" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.textSubTitle}>
            Dining
          </div>
          <div className={styles.textTitle}>
            季節の恵みを活かした<br />
            自然を味わう
          </div>
          <div className={styles.textRow}>
            里山の恵みを感じていただけるよう、農家さんから直送している新鮮なお野菜と、日本海の新鮮な魚介、お肉など新潟の旬の味覚をお楽しみいただけるよう様々なプランをご用意しております。
          </div>
          <div className={styles.textRow}>
            <a href='/'>View more</a>
          </div>
        </div>
        <div className={styles.pictureRight}>
          <img src="images/section04PictureRight.webp" alt="rightPicture" />
        </div>
        <div className={styles.pictureLeft}>
          <img src="images/section04PictureLeft.webp" alt="leftPicture" />
        </div>
        <div className={styles.pictureBottom}>
          <img src="images/section04PictureBottom.webp" alt="bottomPicture" />
        </div>
      </div>
    </section>
  );
};

export default Section04;




