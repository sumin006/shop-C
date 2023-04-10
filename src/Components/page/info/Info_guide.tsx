import React from 'react';
import { siteName } from '../../../App';
import Commentbox from '../../Commentbox';

const Info_guide = () => {
  return (
    <div className='main inner'>
      <h1>이용 안내</h1>
      <Commentbox heading='회원가입 안내' paragraph={[
      `${siteName}을(를) 찾아주셔서 감사합니다 :)`,
      `저희 ${siteName}의 모든 컨텐츠 및 서비스는 회원제를 실시하고 있습니다.`,
      `${siteName}은(는) 이메일,아이디,비밀번호,휴대폰 번호를 기입하고 가입하시면 계정 생성이 가능합니다.`,
      `회원가입 메뉴를 통해 이용약관, 개인정보보호정책 동의 및 일정 양식의 가입항목을 기입함으로써 회원에 가입되며, 가입 즉시 서비스를 무료로 이용하실 수 있습니다.`,
      `주문하실 때에 이력해야하는 각종 정보들을 일일이 입력하지 않으셔도 됩니다.`,
      `회원을 위한 이벤트 및 각종 할인행사에 참여하실 수 있습니다.`
      ]}/>
      <Commentbox heading='주문 안내'
      paragraph={[
        `상품 주문은 다음 단계로 이루어집니다.`,
        `-STEP1: 회원ID 로그인`,
        `-STEP2: 상품검색`,
        `-STEP3: 장바구니에 담기`,
        `-STEP4: 주문서 작성`,
        `-STEP5: 결제방법 선택 및 결제`,
        `-STEP6: 주문 성공 화면`
      ]}/>
      <Commentbox heading='결제 안내'
      paragraph={[
        `[카드결제]`,
        `카드결제 후 부분취소를 원하실 경우 고객센터로 꼭 연락을 주셔야 합니다.`,
        `부분적인 취소는 불가능 하며, 취소하실 상품을 제외한 나머지 상품에 대해 재결제 해주셔야 합니다.`,
        `취소하신 상품에 대해서는 현금환불이 불가능하며 적립금으로 대체하여 사용하실 수 있습니다.`,
        ``,
        `[계좌이체]`,
        `실시간 계좌이체는 해당 계좌에 이체할 금액이 있어야 가능 하며 공인인증서가 필요합니다.`,
        `이체가능 시간은 은행에따라 다를 수 있습니다.`
      ]}/>
      <Commentbox heading='배송 안내'
      paragraph={[
        `배송 업체 : cj 대한통운 택배`,
        `배송 지역 : 전국지역`,
        `배송 비용 : 3,000원 ( 80,000원 이상 구매시 무료배송)`,
        `배송 기간 : 1일 ~ 7일`,
        `도서산간비`,
        `제주도 : 3,000원 기타도서산간지역 : 4,000원`,
        ``,
        `제품을 여러개 주문하실 경우 제품을 하나의 장바구니에 담으시고 한번에 결제해 주셔야 묶음배송이 되며 배송료도 한번만 결제가 됩니다.`,
        `배송은 결제확인 순서로 처리됩니다. 재고가 없거나 주문제작 상품의 경우 미리 공지해 드리며 제작기간은 7일~10일 정도 소요됩니다.`,
        ``,
        `해외배송 관세납부`,
        `상품 주문/결제 금액에 관세는 미포함되어 있으며, 해외 수취인께서 상품을 수령할 때 별도 지불해야 합니다.`,
        `해외에 발송된 상품은 통관실패, 수취거부, 주소지불명 등의 사유로 반송될 수 있으며 이 경우 구매자의 E-MAIL로 반송사유를 알려드립니다.`,
        `반송된 상품에 대해서는 구매자책임이며 홈페이지 > 고객센터 > 1:1 게시판 상담 후 반품배송비를 부담하고 반품처리 할 수 있습니다.`,
        `해외반송비용(해외현지에서 국내로 반송되는 비용)이 부과되는 경우 구매자측에서 부담하셔야 합니다.`,
        `(해외반송비용이 부과되는 경우 : EMS의 경우 반송사유가 ‘수취거부’일때, UPS의 경우 반송사유와 관계없이 반송 발생 시 ) 반품배송비의 부담방법은 고객센터의 안내에 따릅니다.`,
        `교환/반품 시 한국 세관에 의해 관세가 발생할 경우, 구매자가 관세를 부담하셔야 합니다.`
      ]}
      />
      <Commentbox heading='교환/반품 안내'
      paragraph={[
        `상품 구매하시기 전 색상 및 사이즈를 꼼꼼히 확인해 주시고 신중한 구매 부탁드립니다 :)`,
        `교환 및 반품이 가능한 경우는 상품을 받으신 날로부터 7일 이내에 접수한 경우입니다.`,
        `단순변심에 의한 교환, 반품은 고객님께서 택배요금 전액을 부담해 주셔야 하며,`,
        `상품의 문제가 있거나, ${siteName}의 실수로 인한 교환배송비는 ${siteName}에서 부담하며 불량일 경우에는 동일 삼품, 동일 사이즈, 동일한 색상으로만 교환해 드립니다.`,
        `받아보신 상품에 문제가 있다 하더라도 원래 주문하셨던 상품이 아닌 다른 상품으로의 교환은 변심으로 간주되며 배송료는 고객님께서 부담하셔야 합니다.`,
        `교환/반품시 CJ대한통운 택배를 이용해주셔야 하며 타 택배를 이용하시는 경우에는 택배 기사님께 선불로 지불해 주세요.`,
        `CJ대한통운 택배가 아닌 타 택배사로 보내신 착불 요금의 경우 차액은 고객님께서 부담하셔야 합니다`,
        `저희 ${siteName}에서는 시간경과에 따라 재판매가 어려운 경우 교환 및 환불이 불가능합니다.`,
        `소재의 특성상 단순 착용을 해보신 경우라도 텍제거, 늘어짐, 오염, 향기가 배어있는 상품은 재판매와 공급처 교환이 어려우므로`,
        `교환/반품에 어려움이 있는점 양해 부탁드립니다. 받아보신 상품이 불량일 경우일지라도 착용흔적이 있거나 향기, 세탁, 임의로 수선하신 경우에도 반품은 불가합니다.`,
        `누구나 깨끗한 새 상품으로 받고 싶고 저희 또한 고객님들께 깨끗한 새 상품으로만 보내드리기 위함이니 넒은마음으로 이해해주시길 바래요 :)`,
        ``,
        `[겨울코트 착용시 주의사항]`,
        `겨울코트는 가공방법에따라서 착용하시다보면 보풀이 생기는 경우가 있거나 고객님들 착용상태에 따라 보풀이 생길수 있습니다.`,
        `가방에 의해 생기는 보풀, 마찰에 의해 생기는 보풀등 착용 후 생활상에서 생긴 보풀은 불량,반품에 해당되지 않는 부분 양해 부탁드립니다.`,
        `드라이크리닝 후에 착용하시면 보풀 방지에 도움이 되고 더 오래 깔끔하게 입으실 수 있는 방법이기도 합니다.`,
        `tip) 겨울상품 착용 후 보풀 발생시 보풀 제거기를 사용하시면 깔끔하게 입으실 수 있답니다^^`,
        ``,
        `[해외배송 관세납부]`,
        `상품 주문/결제 금액에 관세는 미포함되어 있으며, 해외 수취인께서 상품을 수령할 때 별도 지불해야 합니다.`,
        `해외에 발송된 상품은 통관실패, 수취거부, 주소지불명 등의 사유로 반송될 수 있으며 이 경우 구매자의 E-MAIL로 반송사유를 알려드립니다.`,
        `반송된 상품에 대해서는 구매자책임이며 홈페이지 > 고객센터 > 1:1 게시판 상담 후 반품배송비를 부담하고 반품처리 할 수 있습니다.`,
        `해외반송비용(해외현지에서 국내로 반송되는 비용)이 부과되는 경우 구매자측에서 부담하셔야 합니다.`,
        `(해외반송비용이 부과되는 경우 : EMS의 경우 반송사유가 ‘수취거부’일때, UPS의 경우 반송사유와 관계없이 반송 발생 시 ) 반품배송비의 부담방법은 고객센터의 안내에 따릅니다.`,
        `교환/반품 시 한국 세관에 의해 관세가 발생할 경우, 구매자가 관세를 부담하셔야 합니다.`
      ]}/>
      <Commentbox heading='환불 안내'
      paragraph={[
        `환불시 반품 확인여부를 확인한 후 7일 영업일 이내에 결제 금액을 환불해 드립니다.`,
        ``,
        `[카드 결제 환불]`,
        `카드취소의 경우 전체 취소 /부분취소 접수후 카드사 영업일 기준 7 영업일 이내에 카드 결제금액을 환불해 드립니다.`,
        `카드 결제시 카드사의 할인 혜택이 적용된 결제는 부분 취소가 불가하며,취소하실 상품 금액을 재결제 해주시면 전체 카드 취소로 처리 가능 합니다`,
        `신용카드로 결제하신 경우는 신용카드 승인을 취소하여 결제 대금이 청구되지 않게끔 보다 원활한 처리에 노력하겠습니다.`,
        `(단, 신용카드 결제일자에 맞추어 대금이 청구 될수 있으며 이경우 익월 신용카드 대금청구시 카드사에서 환급처리 됩니다.)`,
        ``,
        `[무통장 입금 환불]`,
        `무통장입금 환불과 같은 경우에는 은행마다 환급기간이 다르므로, ${siteName}에서 환불 접수가 된 후에 2-3일(주말, 공휴일 제외)안으로 환불 처리가 됩니다.`,
        `또한, 실시간 계좌이체 결제건과 에스크로 가상계좌 결제건도 마찬가지로 부분취소가 어려우므로 재결제 후 전체취소로 도움드리고 있습니다.`,
        `(반품/교환 후 총 구매금액이 8만원 미만일 경우 초기배송비는 자동적으로 차감되어집니다.)`,
        ``,
        `[적립금/예치금 결제 환불]`,
        `적립금과 복합결제하여 주문하였을 경우 환불 요청 시 적립금으로 우선 환불됩니다.`,
        `(적립금 환불 요청 후 더 이상 적립금으로 환불할 금액이 없을 경우에 현금 또는 카드취소 가능)`,
        `모든 환불은 실결제금액 기준으로 환불됩니다.(이벤트성 쿠폰및 적립금사용은 1회성이며, 사용후 소멸되며 복구되지 않습니다.)`,
        ``,
        `[핸드폰 결제 환불]`,
        `결제 취소는 결제하신 당월1일~말일 이내에 취소/ 환불 가능 합니다.`,
        `말일 이후에는 취소/환불이 불가하니 신중한 구매 부탁드려요.`,
        `당월이 지나 취소가 불가피할 경우: 현금으로 환불을 원할시 고객센터(1600~0000) 네이버 톡톡,카카오 상담톡으로 연락 부탁드립니다.`
      ]}
      />
    </div>
  );
};

export default Info_guide;