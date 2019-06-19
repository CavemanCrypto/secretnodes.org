export default () => {
  return (
    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Titillium+Web:200,300,400,700');
      body {
        font-family: 'Titillium Web', sans-serif;
        margin: 0;
        padding: 0;
        background-position: left 145px;
        background-repeat: repeat;
        background-color: #065198;
        background-image: url('static/background_pattern.png');
        background-size: 900px;
        overflow-x: hidden;
      }
    `}</style>
    //overflow-x: hidden; - Temporary override on the horizontal overflow due to Calculator.
  )
}
