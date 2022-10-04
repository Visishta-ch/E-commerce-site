import React from 'react'
import styles from './Reviews.module.css'
const Reviews = () => {
  return (
    <>
        <div className={styles.container}>
            <marquee >
                 <h1 className={styles.multicolor}>Reviews & Ratings</h1>
            </marquee>
            <div>
            <span className="fa fa-star checked" style={{color:'rgb(244, 189, 47)'}}></span>
            <span className="fa fa-star checked" style={{color:'rgb(244, 189, 47)'}}></span>
            <span className="fa fa-star checked" style={{color:'rgb(244, 189, 47)'}}></span>
            <span className="fa fa-star checked" style={{color:'rgb(244, 189, 47)'}}></span>
            <span className="fa fa-star"></span>
            </div>
            <p>4.1 average based on 254 reviews.</p>
            <hr style={{border:'3px solid #f1f1f1'}}></hr>

            <div className="row">
            
            <div>
                <div className={styles.side}>
                    <div>5 star</div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.barContainer}>
                    <div className={styles.bar5}></div>
                    </div>
                </div>
                <div className={styles.sideRight}>
                    <div>150</div>
                </div>
            </div>
                <div className={styles.side}>
                    <div>4 star</div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.barContainer}>
                    <div className={styles.bar4}></div>
                    </div>
                </div>
                <div className={styles.sideRight}>
                    <div>63</div>
                </div>
                <div className={styles.side}>
                    <div>3 star</div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.barContainer}>
                    <div className={styles.bar3}></div>
                    </div>
                </div>
                <div className={styles.sideRight}>
                    <div>15</div>
                </div>
                <div className={styles.side}>
                    <div>2 star</div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.barContainer}>
                    <div className={styles.bar2}></div>
                    </div>
                </div>
                <div className={styles.sideRight}>
                    <div>6</div>
                </div>
                <div className={styles.side}>
                    <div>1 star</div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.barContainer}>
                    <div className={styles.bar1}></div>
                    </div>
                </div>
                <div className={styles.sideRight}>
                {/* 20 */}
                    <div>20</div>
                </div>
                </div>

        </div>
    </>
  )
}

export default Reviews