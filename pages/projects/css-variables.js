import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import styles from "../../styles/css-variables.module.css";
import {useRef} from "react";

export default function CSSVariables() {
    const rootSection = useRef();
    const handleInputChange = (event) => {
        const suffix = event.target.type === 'range' ? 'px' : '';
        rootSection.current.style.setProperty(`--${event.target.name}`, event.target.value + suffix);
    }
    
    return (
        <Layout title="CSS Variables">
            <section className={styles.container}
                     ref={rootSection}>
                <h3 className={styles.header}>Picture params</h3>
                <div className="controls">
                    <label htmlFor="spacing">Spacing:</label>
                    <input type="range"
                           name="spacing"
                           min="10"
                           max="200"
                           defaultValue="10"
                           onChange={handleInputChange}/>
                    
                    <label htmlFor="blur">Blur:</label>
                    <input type="range"
                           name="blur"
                           min="0"
                           max="25"
                           defaultValue="10"
                           onChange={handleInputChange}/>
                    
                    <label htmlFor="base">Base color:</label>
                    <input type="color"
                           name="base"
                           defaultValue="#ffffff"
                           onChange={handleInputChange}/>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/lovebird-in-hat.jpg"
                           alt="uploaded image to style"
                           layout={"fill"}
                           objectFit={"contain"}
                           className={styles.image}>
                    </Image>
                </div>
            </section>
        </Layout>
    )
}