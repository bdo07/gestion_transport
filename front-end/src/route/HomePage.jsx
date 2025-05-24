import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // استيراد useTranslation
import '../styles/Page.css';

const HomePage = () => {
  const { t } = useTranslation(); // استخدام useTranslation

  return (
    <>
      {/* الصورة في الجزء العلوي مع النص */}
      <div className="top-image-container">
        <img
          src="hj.jpeg" // استبدل بمسار الصورة الفعلي
          alt="Top Image"
          className="top-image"
        />
        
        <div className="text-overlay">
          {/* العنوان مع تأثيرات حركية */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }} /* يبدأ من الأعلى ويختفي */
            animate={{ y: 0, opacity: 1 }} /* يتحرك إلى المركز ويظهر */
            transition={{ delay: 0.3, duration: 1 }} /* تأخير ومدة الانتقال */
          >
            {t('welcome')} {/* استخدام t هنا */}
          </motion.h1>
          
        </div>


      </div>

      {/* قسم الصور والتعاريف */}
      <div className="image-grid">
        {/* الصورة الأولى */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="image-card"
        >
          <img src="images.jpeg" alt="Phosphate 1" className="image" />
          <div className="image-description">
            <h3>الفوسفاط في الزراعة</h3>
            <p>
              الفوسفاط هو عنصر أساسي في الأسمدة الزراعية، حيث يساعد على نمو النباتات وزيادة إنتاجيتها.
            </p>
          </div>
        </motion.div>

        {/* الصورة الثانية */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="image-card"
        >
          <img src="SHOOTING OCP.jpeg" alt="Phosphate 2" className="image" />
          <div className="image-description">
            <h3>الفوسفاط في الصناعة</h3>
            <p>
              يستخدم الفوسفاط في صناعة المواد الكيميائية والأسمدة والأعلاف الحيوانية.
            </p>
          </div>
        </motion.div>

        {/* الصورة الثالثة */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="image-card"
        >
          <img src="bais.jpeg" alt="Phosphate 3" className="image" />
          <div className="image-description">
            <h3>الفوسفاط في البيئة</h3>
            <p>
              يساهم الفوسفاط في تحسين جودة التربة ودعم النظم البيئية الزراعية.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;