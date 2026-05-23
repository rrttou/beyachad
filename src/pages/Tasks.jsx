export default function Tasks(){
  const t=['לעזור לתלמיד לבד','לצרף חבר למשחק','לבדוק מי לבד']
  return <div className='card'>
    משימה: {t[Math.floor(Math.random()*t.length)]}
  </div>
}
