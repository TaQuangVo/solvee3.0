import style from "./homeSection2.module.css"

import QuouteIcon from "../../svg/Quote"
import Feather from "../../svg/feather"

export default function HomeVision() {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <h2 className={style.title}>Solvees vision inom IT</h2>
                <p>Vi jobbar med marknadens ledare. </p>
                <p>Våra uppdrag är att skaffa dig tillgång till marknadens senaste teknologi!</p>
            </div>
            <div className={style.quote}>
                <p><span>"</span>IT tecnologi har utnecklas med en rasande fas sennaste åren. Smal och medium stor bolag hinner inte med den fasen av utveckling. Många anävnder fortfarande out-dated tenologi som ger en världig otrygg känsa för kunden. <br/>  <br/> 
                Din online precentation börjar spela en större och större roll. En hemsida är inte längre något bra och ha, utan det är något essentiel för alla typer av bolag. Det är där din kun får veta om din existens och det är där kunden får det första intrycket av din service <br/>  <br/> 
                Vi finns här för dig, vi ger dig det bästa precentationen framför dina kunder.<span>"</span></p>
               <span className={style.backImage}>VISION</span>
            </div>
            <div className={style.motivationQuote}>
                <div className={style.imageSide}>
                    <div className={style.icon}>
                        <QuouteIcon />
                    </div>
                    <div className={style.name}>
                        <span className={style.surName}>Solvee</span>
                        <span className={style.lastName}>Solusion</span>
                    </div>
                </div>
                <div className={style.contentSide}>
                    <p>"Success has nothing to do with what you gain in life or accomplish for yourself. It what your do to others".</p>
                    <p className={style.author}>Danny Thomas</p>
                </div>
                <div className ={style.featherIcon}>
                    <Feather />
                </div>
            </div>
        </section>
    )
}

/*

Våra uppdrag är att skaffa alla tillgång till marknadens ledare teknologi.
IT tecnologi har utverklas med en rasande fas sennaste åren.
Smal och medium stor bolag hinner inte med den fasen av utveckling, många använder fortfarande out-dated tecnologi som ger en världig otrygg känsla för användaren.
En hemsida är inte längre något bra och ha, utan det är något essentiel för alla typer av bolag.  Det är där alla får vet om din existens och det är där kunden får det första intrycket av din service. Tycker en kund inte om din online precentation kan det konsta dig den kunden. <br/>
Användaren har störe och störe krav på hur en hemsida ska vara. En

*/