import React, { useLayoutEffect, useState } from 'react';
import styles from "./WorkPage.module.scss"

const calcHeight = (windowHeight: number)  => {

};

const WorkPage = () => {

  const [height, setHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    const resizePDF = () => {
      
    };
    document.addEventListener('resize', resizePDF);
    return () => document.removeEventListener('resize', resizePDF);
  }, []);

  return (
        <div>
          <div className={styles.container}>
            <h3>Michael Belousov's Resume:</h3>
            <iframe
              title="mike's resume pdf"
              className={styles.pdf} 
              src="https://docs.google.com/gview?url=http://github.com/MichaelBelousov/resume/raw/master/resume.pdf&embedded=true"
              //frameborder="0"
              style={{ height }}
            > 
              <p> You can't see it apparently. My resume as a PDF should 
                  be at my github page,  
              <a href="http://github.com/MichaelBelousov/resume">here</a>.</p>
            </iframe>
          </div>
        </div>
  );
};

export default WorkPage;

