// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateWord(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  // const options = 'engineer'

  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const engineerTask = sample(task.engineer)
  const designerTask = sample(task.designer)
  const entrepreneurTask = sample(task.entrepreneur)
  const generatePhrase = sample(phrase)

  if (options === 'engineer') {
    return (`身為一位工程師，${engineerTask}${generatePhrase}吧！`)

  } else if (options === 'designer') {
    return (`身為一位設計師，${designerTask}${generatePhrase}吧！`)

  } else if (options === 'entrepreneur') {
    return (`身為一位企業家，${entrepreneurTask}${generatePhrase}吧！`)
  } else {
    return ('Please select a photo!')
  }
  console.log('this function is working')
}
module.exports = generateWord