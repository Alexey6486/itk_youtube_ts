import React from 'react';
import styles from './style.module.css'

function ProfileData() {
    return (
        <div className={styles.profileData}>
            <div className={styles.profileData__title}>
                <h3>PROFILE</h3>
            </div>
            <div className={styles.profileDataContent}>
                <div className={styles.profileDataContent__avatar}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 512 512">
                        <path d="M68.169,447.023C71.835,449.023,159.075,496,256,496c105.008,0,184.772-47.134,188.116-49.14A8,8,0,0,0,448,440c0-64.593-19.807-123.7-55.771-166.442-25.158-29.9-56.724-50.28-91.539-59.662a104,104,0,1,0-89.38,0c-34.815,9.382-66.381,29.765-91.539,59.662C83.807,316.3,64,375.407,64,440A8,8,0,0,0,68.169,447.023ZM168,120a88,88,0,1,1,88,88A88.1,88.1,0,0,1,168,120ZM132.013,283.859C164.5,245.258,208.528,224,256,224s91.5,21.258,123.987,59.859c32.681,38.838,51.056,92.48,51.977,151.474C414.845,444.6,343.708,480,256,480c-81.11,0-157.5-35.609-175.96-44.856C81,376.223,99.367,322.656,132.013,283.859Z"/>
                    </svg>
                </div>
                <div className={styles.profileDataContent__info}>
                    <div className={styles.profileDataContent__name}>
                        <h2>John Doe</h2>
                    </div>
                    <div className={styles.profileDataContent__position}>
                        <h3>WEB Developer</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileData;