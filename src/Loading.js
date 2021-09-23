import React from 'react';

const LoadingComments = [
    {
      mbti: "ISTJ",
      image: "",
      comment: [
        "ENFP, 나 좀 조용히 좀 내버려 둘래?",
        "아.. 그래서 용건이 뭔데?",
        "방정리.. 그래 방정리 해야지",
      ],
    },
    {
      mbti: "ISTP",
      image: "",
      comment: [
        "뭘 그렇게 어렵게 하려고 해? 대충대충 하는거지~",
        "또 과제야? 대충 끝내고 놀아야겠다",
        "조금 게으른게 죄는 아니잖아~",
      ],
    },
    {
      mbti: "ISFJ",
      image: "",
      comment: [
        "아 그렇구나 ㅎㅎ 네 생각이 맞는 것 같아",
        "내가 줏대없다고? 그냥 싸우기 싫어서 이야기를 안하는 것일 뿐인데..",
        "계획은 잔뜩 세워 뒀는데.. 이번에도 못 지킬 것 같네 ㅎㅎ",
      ],
    },
    {
      mbti: "ISFP",
      image: "",
      comment: [
        "이불 밖은 위험해~",
        "약속 취소하면.. 오히려 좋아",
        "또 과제야? 모르겠다.. 기분도 꿀꿀한데 안해야지..",
      ],
    },
    {
      mbti: "INFJ",
      image: "",
      comment: [
        "인간은 왜 존재하는 것인가...",
        "방금 내 말이 기분 나빴나...?",
        "ENTP.. 너 완전 또라이구나, 정말 멋있어!!",
      ],
    },
    {
      mbti: "INFP",
      image: "",
      comment: [
        "아, 진짜? 완전 감동이야 ㅠㅠ",
        "무지개빛 유니콘이 하늘을 날아다니는 상상을 해본 적 있어?",
        "ENTJ가 날 안 좋아하면 어떡하지..",
      ],
    },
    {
      mbti: "INTJ",
      image: "",
      comment: [
        "그렇게 하지말고 이렇게 하는 게 훨씬 빠를 듯.",
        "술자리에서 일 이야기 하는 게 뭐 어때서?",
        "감정이 없는 게 아니라 가장 합리적인 방법을 찾는 것일 뿐이라고",
      ],
    },
    {
      mbti: "INTP",
      image: "",
      comment: [
        "사람들은 나를 고독한 과학자라고 부르지.. 왜 그럴까?",
        "연애라.. 별로 관심 없는데?",
        "작업실에 틀어박혀서 그림 그릴 때가 최고로 행복해",
      ],
    },
    {
      mbti: "ESTJ",
      image: "",
      comment: [
        "아니 INFP, 너 방이 왜 이렇게 더러운 거야!!",
        "MBTI는 유사과학이야, 믿지 말라고! 그래서 내 MBTI가 뭐냐고? 나야 ESTJ..",
        "내가 무섭다고? 왜 무서운지 그 이유를 설명해봐",
      ],
    },
    {
      mbti: "ESTP",
      image: "",
      comment: [
        "ISFP, 물건 환불하는 게 뭐가 어때서 주저하고 있는거야?",
        "내 인생, 나름 멋있는 것 같지 않아?",
        "그냥 즐기자고, 그게 내기 하는 맛이지",
      ],
    },
    {
      mbti: "ESFJ",
      image: "",
      comment: [
        "오 이런, ENFP도 만나야 되고, ISFJ도 만나야 되고, 볼 사람이 너무 많아!",
        "어떻게 그 많은 사람들을 다 챙기냐고? 안 챙기는 게 말이 안되지 않아?",
        "왜 세상이 살기 힘들다고 하는지 모르겠어, 적당히 맞추면 다 잘 돌아가던데",
      ],
    },
    {
      mbti: "ESFP",
      image: "",
      comment: [
        "파티? 파티에 내가 빠질 수 없지!",
        "아, 난 정말 공부는 못해먹겠단 말이야",
        "왜 다들 그렇게 진지한거야? 그냥 재미있게 놀면 안돼?",
      ],
    },
    {
      mbti: "ENTJ",
      image: "",
      comment: [
        "모든 계획이 완벽하게 들어 맞아야만해",
        "ENTP.. 너는 도저히 이해할 수가 없다",
        "내가 꼰대라고 하는 사람들이 있는데, 누구보다도 내가 꼰대를 싫어한다고",
      ],
    },
    {
      mbti: "ENTP",
      image: "",
      comment: [
        "어디, 나보다 잘난 놈 나와 보라 그래",
        "와 이 정도면 완전 갓생인데?",
        "걔가 날 싫어한다고? 감히?",
        "마 내가 ENTP이다~",
        "걔가 내 뒷담을 까고 있다고?? 재밌네",
      ],
    },
    {
      mbti: "ENFJ",
      image: "",
      comment: [
        "내가 인싸라고? 나는 모두와 잘지내고 싶을 뿐인데",
        "코로나 때문에 친구들을 못 만나잖아 ㅠㅠ",
        "한 명이라도 소외되는 사람이 있어서는 안돼",
      ],
    },
    {
      mbti: "ENFP",
      image: "",
      comment: [
        "오, 너가 전학온 친구구나? 친하게 지내자!!",
        "걔가 날 싫어한다고..? 난 친해지고 싶은데 ㅠㅠ",
        "내 대가리가 꽃밭이라고? 꽃밭이면 좋은거네! 그치?",
      ],
    },
  ];
  
  const randomObject = LoadingComments[Math.floor(Math.random()*LoadingComments.length)]

  function ShowRandom({comment}) {
    return <div>
    <h3>{comment}</h3>
    </div>
  };

  function RandMbti() {
    return (
      <div>
        <h3>My mbti is {randomObject.mbti}.</h3>
        <h4>This is something I might say.</h4>
        {randomObject.comment.map((item, index) =>(
          <ShowRandom key={index} comment={item} />
        ))}
      </div>
    );
  }

  export default RandMbti;
