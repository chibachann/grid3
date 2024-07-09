import * as React from 'react';
import * as styles from './section05.module.css';

const Section05 = () => {
  return (
    <section id="section04" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.textSubTitle}>
            Experience
          </div>
          <div className={styles.textTitle}>
            里山生活を味わえる<br />
            体験型宿泊施設
          </div>
          <div className={styles.textRow}>
          MAHORAは、妙高の里山生活を味わえる体験型宿泊施設です。地域の豊かさ、歴史、風土を交流を通して里山ならではの特別なひとときをお過ごしください。
          </div>
          <div className={styles.textRow}>
            <a href='/'>View more</a>
          </div>
        </div>
        <div className={styles.pictureRight}>
          <img src="images/section05PictureRight.webp" alt="rightPicture" />
        </div>
      </div>
    </section>
  );
};

export default Section05;
