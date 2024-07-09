import * as React from 'react';
import * as styles from './section03.module.css';

const Section03 = () => {
 
  return (
    <section id="section03" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>RESEARCH<br/>THEME</h2>
          <p>研究テーマ</p>
        </div>
        <div className={styles.text}>
          <p>AIは社会を豊かにする一方、膨大な計算資源を必要とし電力危機を引き起こしています。</p>
          <p>電力問題を解決するため、人間の大脳を模した布線論理型プロセッサや次世代3次元実装技術を開発しています。</p>
          <p>チップ実装技術、ソフトウェア、さらには半導体設計にAIを駆使し、半導体が持つ無限の可能性を追求します。</p>
        </div>
        <div className={styles.box}>
          <div className={styles.card}>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
