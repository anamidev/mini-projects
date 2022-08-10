import Layout from "../../components/Layout/Layout";
import styles from "../../styles/image-gallery.module.css";

export default function ImageGallery() {
    let isPanelOpening = false;
    
    const toggleOpen = (event) => {
        if (!isPanelOpening) {
            isPanelOpening = true;
            const panel = event.target.closest(`.${styles.panel}`);
            panel.classList.toggle(`${styles.open}`)
        }
    }
    const toggleActive = (event) => {
        if (event.propertyName.includes('flex')) {
            const panel = event.target.closest(`.${styles.panel}`);
            panel.classList.toggle(`${styles.active}`);
            isPanelOpening = false;
        }
    }
    
    return (
        <Layout title="Image Gallery">
            <section>
                <div className={styles.panels}>
                    <div className={`${styles.panel} ${styles.panel1}`}
                         onClick={toggleOpen}
                         onTransitionEnd={toggleActive}>
                        <p>Hey</p>
                        <p>Let's</p>
                        <p>Dance</p>
                    </div>
                    <div className={`${styles.panel} ${styles.panel2}`}
                         onClick={toggleOpen}
                         onTransitionEnd={toggleActive}>
                        <p>Give</p>
                        <p>Take</p>
                        <p>Receive</p>
                    </div>
                    <div className={`${styles.panel} ${styles.panel3}`}
                         onClick={toggleOpen}
                         onTransitionEnd={toggleActive}>
                        <p>Experience</p>
                        <p>It</p>
                        <p>Today</p>
                    </div>
                    <div className={`${styles.panel} ${styles.panel4}`}
                         onClick={toggleOpen}
                         onTransitionEnd={toggleActive}>
                        <p>Give</p>
                        <p>All</p>
                        <p>You can</p>
                    </div>
                    <div className={`${styles.panel} ${styles.panel5}`}
                         onClick={toggleOpen}
                         onTransitionEnd={toggleActive}>
                        <p>Life</p>
                        <p>In</p>
                        <p>Motion</p>
                    </div>
                </div>
            </section>
            
        </Layout>
    )
}