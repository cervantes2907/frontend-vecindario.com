

import React from 'react'
import {Link} from 'react-router-dom'
import  styles from './Navigation.module.css'


const Navigation = () => {
    return (
    <nav className={styles.navContainer} >
        <div className={styles.container}>
        <a href="https://www.vecindario.com/crea-tu-cuenta" target="_blank"><img src="data:image/png;base64,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" style={{height:'70px', width:'100px', borderRadius:'5px', marginRight:'1rem'}}></img></a>
        <Link to="/publicarPost" className={styles.linkButtom}>Post Comments</Link>

            <div className={styles.collapseNavbarCollapse} style={{marginLeft:'55%'}}id="navbarNav ">
                <ul className={styles.navbarNav}>
                  <li className={styles.navItem1}>
                    <Link className={styles.navLinkActive}  to="/">Home</Link>
                    </li>
                    <li className={styles.navItem2}>
                    <Link className={styles.navLink}  to="/post"></Link>
                    </li>
                    <li className={styles.itemPost}>
                     <Link className={styles.navLink2}  to="/publicarPost"></Link>
                    </li>
                    <li className={styles.navItem4}>
                    <Link className={styles.navLink3}  to="/comentarios"></Link>
                    </li>
                    <li className={styles.navItemDropdown}>
                    <ul className={styles.dropdownMenu} aria-labelledby="navbarDropdownMenuLink">
                      <select name="menu">
                      <option value="value1">Mi Perfil</option>
                      <option value="value2" >Mensajes</option>
                      <option value="value3">Grupos</option>
                   </select>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navigation;



