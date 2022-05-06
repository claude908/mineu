/* 
even number + 1 shouldn't be grouped together
ENTJ(CHECK), ENTP(0247), ENFJ(0), ENFP
ESTJ, ESTP(CHECK), ESFJ, ESFP
INTJ, INTP, INFJ, INFP
ISTJ, ISTP, ISFJ, ISFP
*/


const qnaList = [
  {
    q: '친구와 둘이 술을 마시던 중, 다른 사람이 합류 하려고 한다면 나는 ',
    a: [
      { answer: '“너무 어색할 것 같아..” 그냥 그 친구는 다음에 오라고 하자!', type: ['ENTJ', 'ENTP', 'ENFJ', 'INFP', 'ESTJ', 'ISFJ', 'ESTP', 'ESFP'] },
      { answer: '“우리는 모두 친구~” 새로운 사람 만날 생각에 벌써 들뜬다.', type: ['INTJ', 'INTP', 'ESFJ', 'INFJ', 'ENFP', 'ISTJ', 'ISTP', 'ISFP'] },
    ]
  },

  {
    q: '오랜만에 안부 연락이 닿은 친구. 내 답장은 ',
    a: [
      { answer: '“코로나 끝나면 언제 술 먹을래??” 약속을 추진한다.', type: ['ENTJ', 'INTP', 'ENFJ', 'ENFP', 'ESTJ', 'ESTP', 'ESFJ', 'ISFP'] },
      { answer: '“그래 코로나 끝나면 만나자~” 일단 대충 마무리한다.', type: ['INTJ', 'ENTP', 'INFJ', 'ISTJ', 'INFP', 'ISTP', 'ISFJ', 'ESFP'] },
    ]
  },

  {
    q: '옆 테이블에서 시끌벅적 생일축하 노래가 들린다. 나는 ',
    a: [
      { answer: '“저 사람 생일인가 보네..” 생각만 한다.', type: ['ENTJ', 'ENTP', 'ENFJ', 'ENFP', 'ESFJ', 'ISTJ', 'ISTP', 'ESFP'] },
      { answer: '“축하해요~~” 박수갈채와 환호를 날린다.', type: ['INTJ', 'INTP', 'INFJ', 'ESTJ', 'INFP', 'ISFJ', 'ESTP', 'ISFP'] },
    ]
  },

  {
    q: '사장님이 계란말이 안주 서비스를 주셨다. 이 때 나는 ',
    a: [
      { answer: '“감사합니다. 잘 먹을게요!” 신난 티 팍팍 낸다.', type: ['ENTJ', 'INTP', 'INFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTP', 'ESFP'] },
      { answer: '“감사합니다 ㅎㅎ” 마음은 신났지만 겉으로 미소만 짓는다.', type: ['INTJ', 'ENTP', 'ENFJ', 'INFP', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP'] },
    ]
  },

  {
    q: '화장실 줄을 서는데 앞 사람과 말이 너무 잘 통한다. 나는 ',
    a: [
      { answer: '“X스타그램 맞팔해요! 어느 동네 산다고 하셨죠? 저 그 옆 동넨데!”', type: ['ENTJ', 'ENTP', 'INFJ', 'INFP', 'ISFJ', 'ESTJ', 'ISTP', 'ESFP'] },
      { answer: '좋은 사람 같지만 그냥 듣기만 하고 “예” 하고 얼른 마무리한다.', type: ['INTJ', 'INTP', 'ENFJ', 'ENFP', 'ISTJ', 'ESFJ', 'ESTP', 'ISFP'] },
    ]
  },

  {
    q: '친구가 내 이상형에 가까운 사람을 소개시켜준다고 한다. 나는 ',
    a: [
      { answer: '호기심은 가지만 생각만해도 벌써 어색하다. 고민을 좀 해본다.', type: ['ENTJ', 'INTP', 'INFJ', 'INFP', 'ESTJ', 'ISTP', 'ESFJ', 'ISFP'] },      //SIXTH QUESTION
      { answer: '뭐? 이상형? 말 할 것도 없이 일단 연락처부터 받아 본다.', type: ['INTJ', 'ISTJ', 'ENTP', 'ENFP', 'ENFJ', 'ESTP', 'ISFJ', 'ESFP'] },
    ]
  },

  {
    q: '소개받은 분과 첫 만남 후 기류가 좋다. 나는 ',
    a: [
      { answer: '얼굴 보고 더 얘기 많이 해야지! “이번 주말에 뭐 하세요?”', type: ['ENTJ', 'ESTP', 'ENFP', 'ENTP', 'ENFJ', 'ISTJ', 'ESTP', 'ESFJ', 'ISFP'] },
      { answer: '그 사람이 좋은 것은 맞지만 일단 주말은 집에서 쉬고 싶다.', type: ['INTJ', 'INFP', 'INTP', 'INFJ', 'ESTJ', 'ISTP', 'ISFJ', 'ESFP'] },
    ]
  },


  {
    q: '썸 탄지 몇 주 째, 이제는 고백 타이밍이다. 나는 ',
    a: [
      { answer: '내가 먼저 해도 상관 없다. 마음만 통하면 되는데 뭐!', type: ['ENTJ', 'ENFP', 'INTP', 'ENFJ', 'ISTJ', 'ISTP', 'ISFJ', 'ISFP'] },
      { answer: '내가 먼저 하는 고백은 상상도 못한다. 부끄러우니까…', type: ['INTJ', 'INFP', 'ENTP', 'INFJ', 'ESTJ', 'ESTP', 'ESFJ', 'ESFP'] },
    ]
  },

  {
    q: '함께 찍은 커플 사진이 잘 나왔다! 나는 ',
    a: [
      { answer: '어디 안 올리고 우리끼리만 예쁘게 간직하고 싶다.', type: ['ENTJ', 'ESTP', 'ENFP', 'ENTP', 'ENFJ', 'ESTJ', 'ISFJ', 'ESFP'] },
      { answer: '세상사람들~저희 잘 어울리죠?! 당장 럽스타그램 업로드!', type: ['INTJ', 'ISTJ', 'INFP', 'INTP', 'INFJ', 'ESFJ', 'ISTP', 'ISFP'] },
    ]
  },

  {
    q: '사귀고 나서 첫 데이트! 흰 옷을 입은 애인과 밥을 먹으러 온 나는 ',
    a: [
      { answer: '매장을 조용히 둘러 본 후 앞치마를 가져와서 준다.', type: ['ENTJ', 'ESTP', 'INTP', 'INFP', 'INFJ', 'ESTJ', 'ESFJ', 'ESFP'] },
      { answer: '“사장님~앞치마 하나만 주세요!”', type: ['INTJ', 'ISTJ', 'ENFP', 'ENTP', 'ENFJ', 'ISFJ', 'ISTP', 'ISFP'] },
    ]
  },

  {
    q: '연애 중 생긴 일화들! 나는 친구들에게 애인에 대해 ',
    a: [
      { answer: '몇 가지 생각나는 웃긴 썰, 자랑 등을 마구 얘기한다.', type: ['ENTJ', 'ESTP', 'ENTP', 'INFP', 'INFJ', 'ISTJ', 'ESFJ', 'ESFP'] },
      { answer: '물어볼 때만 가볍게 얘기하고 먼저 말을 꺼내진 않는다.', type: ['INTJ', 'INTP', 'ENFP', 'ENFJ', 'ISFJ', 'ESTJ', 'ISTP', 'ISFP'] },
    ]
  },

]

const infoList = [
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },

  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
  {
    name: '',
    desc: ''
  },
    
  
]

// There will be a total of 16 descriptions

const resultMsg = [
  {
    pop: '진단결과가 마음에 드셨나요?'
  },
  {
    pop: '그럼 당신만을 위한 맞춤형 다이어트 식품을 추천 드릴게요.'
  }
]