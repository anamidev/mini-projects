import Layout from "../../components/Layout/Layout";
import styles from "../../styles/image-gallery.module.css";

export default function ImageGallery() {
    let isPanelOpening = false;
    let lastPanel;
    
    const toggleOpen = (event) => {
        if (!isPanelOpening) {
            isPanelOpening = true;
            const panel = event.target.closest(`.${styles.panel}`);
            if (lastPanel && lastPanel !== panel) {
                lastPanel.classList.remove(`${styles.open}`);
            }
            panel.classList.toggle(`${styles.open}`);
            lastPanel = panel;
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
                <div className={styles.header}>
                    <span>5 popular medium parrots</span>
                </div>
                <div className={styles.panels}>
                    <div className={`${styles.panel} ${styles.panel1}`}
                         onClick={toggleOpen}
                         onTransitionEnd={toggleActive}>
                        <p>Most</p>
                        <p>Lovebird</p>
                        <p>Loyal</p>
                    </div>
                    <div className={`${styles.panel} ${styles.panel2}`}
                         onClick={toggleOpen}
                         onTransitionEnd={toggleActive}>
                        <p>Best</p>
                        <p>Cockatiel</p>
                        <p>Singer</p>
                    </div>
                    <div className={`${styles.panel} ${styles.panel3}`}
                         onClick={toggleOpen}
                         onTransitionEnd={toggleActive}>
                        <p>Most</p>
                        <p>Aratinga</p>
                        <p>Playful</p>
                    </div>
                    <div className={`${styles.panel} ${styles.panel4}`}
                         onClick={toggleOpen}
                         onTransitionEnd={toggleActive}>
                        <p>Most</p>
                        <p>Ringed</p>
                        <p>Talkative</p>
                    </div>
                    <div className={`${styles.panel} ${styles.panel5}`}
                         onClick={toggleOpen}
                         onTransitionEnd={toggleActive}>
                        <p>Most</p>
                        <p>Caique</p>
                        <p>Active</p>
                    </div>
                </div>
            </section>
            
        </Layout>
    )
}