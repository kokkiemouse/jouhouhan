import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import styles from "../styles/aboutpage.module.css"
import LastBanner from "../components/LastBanner"
class AboutPage extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div>
          <div className={styles.About_Page_Gaiyou}>
            <div className={styles.innerkun24}>
            情報班について
            </div>
          </div>
          <div>
            <center>
              <h1  className={styles.mmidasi}>情報班とは?</h1>
            </center>
            <div className={styles.Hangaiyou}>
            情報班はSS部にある班です。<br />
            普段はタブレットPC室で元気に活動しています。
            </div>
            <center>
              <h1>情報班設立の経緯</h1>
            </center>
            <div className={styles.Hangaiyou}>
            社会ではIT化が進む中で、科学技術による社会課題の解決を目指すSS部には<br />
            情報系の研究班が存在していなかった。<br />
            そこで、情報系の研究を行うためにSS部の最も新しい研究班として情報班が設立。2021年現在6代目を数える。<br />
当初の活動は、ブラウザ上で英単語学習や時間割の確認が可能な校内向けのサイトを作ることを目的としていたが、<br />
サイトの保守と更新の難しさから断念。<br />
全国規模の大会「パソコン甲子園」への出場にむけてアプリケーション制作を行った。
<br />結果として2017年パソコン甲子園モバイル部門の本選出場を果たした。<br />
工業高校や高等専門学校が名を連ねる中で、普通科高校である福島高校から本選出場は快挙であった。<br />
情報班創設に関わったメンバー2名は以下の規則を制定。<br />巷では情報”藩”の名称でも親しまれている。以下、城跡の石板から発見された文書の抜粋。<br />
元禄弐年制定 ＳＳ藩諸法度 第243条 18項<br /><br />
情報藩たるもの
<ul>
  <li>よく話し合うべし</li>
  <li>先生を敬うべし</li>
  <li>好き嫌いすること勿れ（特に班長）</li>
  <li>童心忘るべからず</li>
  <li>親しき仲にも礼儀あり</li>
</ul>
これを守らざる者、情報藩に非ず。
            </div>
            
            <center>
              <h1>情報班設立の経緯</h1>
            </center>
            <div className={styles.Hangaiyou}>

            JK班の名で親しまれる情報教育（Joho Kyouiku）班だが、<br />
            創設にかかわったメンバー4名のうちJKはたった1人であり、そのJKすらもいわゆる一般的な女子高生ではなく、<br />
            情報班内ではヲタサーの姫としてその名を馳せていた。<br />
高等学校でのプログラミング教育必修化が目前に迫る中、<br />
福島高校ないし福島県全体がプログラミングをはじめとする情報教育に対応できるような環境は皆無であった。<br />
そこで、学校が変わるのを待っていれば影響を受けるのは我々生徒であるから、<br />
これは自分たちから変える働きかけを起こすべきだという理念のもとで、<br />
アプリ班から独立する形で2018年度秋に結成された。<br />
福島高校全面協力の下、自作のプログラミング学習教材を使って情報化の授業時間に<br />
実証実験するなど自分たちで教材から授業実施までを一貫して行うことにこだわるというスタイルは<br />
全国的にも唯一無二の研究班と言えるだろう。
            </div>
          </div>
        </div>
        <div style={{
          marginTop:"15vw"
        }} />
        <LastBanner />
      </>
    )
  }
}
export default AboutPage