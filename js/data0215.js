const qnaList = [
  {
    q: '1. 사람과 말하다 보면 스트레스를 받을 때가 많다',
    a: [
      { answer: 'a. 예', type: ['introvert'] },
      { answer: 'b. 아니오', type: ['extrovert'] },
    ]
  },

  {
    q: '2. 주말에 만남이 있거나 약속을 잡는 편이다',
    a: [
      { answer: 'a. 예', type: ['extrovert'] },
      { answer: 'b. 아니오', type: ['introvert'] },
    ]
  },

  {
    q: '3. 새로운 사람을 만나는 것이 자연스럽다',
    a: [
      { answer: 'a. 예', type: ['extrovert'] },
      { answer: 'b. 아니오', type: ['introvert'] },
    ]
  },

  {
    q: '4. 나는 혼자 오래 있는 것이 더 편하다',
    a: [
      { answer: 'a. 예', type: ['introvert'] },
      { answer: 'b. 아니오', type: ['extrovert'] },
    ]
  },

  {
    q: '5. 소개로 사람을 만날 때 먼저 대화를 시작하는 편이다',
    a: [
      { answer: 'a. 예', type: ['extrovert'] },
      { answer: 'b. 아니오', type: ['introvert'] },
    ]
  },

  {
    q: '6. 식당에 가면 조용이 밥 먹고 싶은 생각이 든다',
    a: [
      { answer: 'a. 예', type: ['introvert'] },
      { answer: 'b. 아니오', type: ['extrovert'] },
    ]
  },

  {
    q: '7. 나의 비밀을 혼자 간직하는 것이 마음 편하다',
    a: [
      { answer: 'a. 예', type: ['introvert'] },
      { answer: 'b. 아니오', type: ['extrovert'] },
    ]
  },


  {
    q: '8. 혼자 조용하고 편안한 시간을 보낼 때 더 기분이 좋다',
    a: [
      { answer: 'a. 예', type: ['introvert'] },
      { answer: 'b. 아니오', type: ['extrovert'] },
    ]
  },

  {
    q: '9. 나는 사람들과 함께 웃고 떠드는 것이 좋다',
    a: [
      { answer: 'a. 예', type: ['extrovert'] },
      { answer: 'b. 아니오', type: ['introvert'] },
    ]
  },

  {
    q: '10. 새로운 사람들을 만나면 두려움 보다 호기심이 더 크다',
    a: [
      { answer: 'a. 예', type: ['extrovert'] },
      { answer: 'b. 아니오', type: ['introvert'] },
    ]
  },

  {
    q: '11. 혼자 등산 가는 것이 함께 어울려 하는 운동보다 편하다',
    a: [
      { answer: 'a. 예', type: ['introvert'] },
      { answer: 'b. 아니오', type: ['extrovert'] },
    ]
  },

]

const infoList = [
  {
    name: '', //Something about an introvert <내향적>
    desc: ''
  },
  {
    name: '', //Context Textholder Extrovert <외향적>
    desc: ''
  }
]

const resultMsg = [
  {
    pop: '진단결과가 마음에 드셨나요?'
  },
  {
    pop: '그럼 당신만을 위한 맞춤형 다이어트 식품을 추천 드릴게요.'
  }
]