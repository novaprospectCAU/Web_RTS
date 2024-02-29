interface UnitFormat {
  health: number; //체력
  armor: number; //방어력
  position: string; //배치 위치 : ground | air
  isAttackGround: boolean; //대지공격 가능 여부
  groundAttackLight: number; //경장갑대상 대지공격력
  groundAttackHeavy: number; //중장갑대상 대지공격력
  groundAttackSpeed: number; //대지공격 속도 (틱으로 변경 가능)
  groundSplash: number; //대지 범위피해 (기본 : 0)
  groundRange: number; //대지 사거리
  isAttackAir: boolean; //대공공격 가능 여부
  airAttackLight: number; //경장갑대상 대공공격력
  airAttackHeavy: number; //중장갑대상 대공공격력
  airAttackSpeed: number; //대공공격 속도
  airSplash: number; //대공 범위피해 (기본 : 0)
  airRange: number; //대공 사거리
  isMovable: boolean; //이동 가능 여부 (견인포같이 고정 포대 유닛 고려)
  movingSpeed: number; //이동 속도 (이동 가능 여부와 상관 없음)
  price: number; //생산 비용
  produceFrom: string; //생산 건물 (string)
  productionTime: number; //생산 시간
  isCollectable: boolean; //자원 채집 가능 여부
  sight: number; //시야 범위
}

/**
 * 가장 기본적인 일꾼 유닛입니다.
 * 특징 : 약한 지상 공격가능 유닛으로 자원을 채집할 수 있습니다.
 */
export class Miner implements UnitFormat {
  constructor(
    public health: number,
    public armor: number,
    public position: string,
    public isAttackGround: boolean,
    public groundAttackLight: number,
    public groundAttackHeavy: number,
    public groundAttackSpeed: number,
    public groundSplash: number,
    public groundRange: number,
    public isAttackAir: boolean,
    public airAttackLight: number,
    public airAttackHeavy: number,
    public airAttackSpeed: number,
    public airSplash: number,
    public airRange: number,
    public isMovable: boolean,
    public movingSpeed: number,
    public price: number,
    public produceFrom: string,
    public productionTime: number,
    public isCollectable: boolean,
    public sight: number
  ) {
    this.health = 15;
    this.armor = 0;
    this.position = "ground";
    this.isAttackGround = true;
    this.groundAttackLight = 2;
    this.groundAttackHeavy = 2;
    this.groundAttackSpeed = 3;
    this.groundSplash = 0;
    this.groundRange = 1;
    this.isAttackAir = false;
    this.airAttackLight = 0;
    this.airAttackHeavy = 0;
    this.airAttackSpeed = 0;
    this.airSplash = 0;
    this.airRange = 0;
    this.isMovable = true;
    this.movingSpeed = 3;
    this.price = 30;
    this.produceFrom = "command";
    this.productionTime = 12;
    this.isCollectable = true;
    this.sight = 10;
  }
}

/**
 * 가장 기초적인 공격 및 정찰 유닛입니다.
 * 특징 : 약한 대지, 대공 지상 유닛으로, 싼 가격으로 가장 빨리 뽑을 수 있는 공격용 유닛입니다.
 */
export class Soldier implements UnitFormat {
  constructor(
    public health: number,
    public armor: number,
    public position: string,
    public isAttackGround: boolean,
    public groundAttackLight: number,
    public groundAttackHeavy: number,
    public groundAttackSpeed: number,
    public groundSplash: number,
    public groundRange: number,
    public isAttackAir: boolean,
    public airAttackLight: number,
    public airAttackHeavy: number,
    public airAttackSpeed: number,
    public airSplash: number,
    public airRange: number,
    public isMovable: boolean,
    public movingSpeed: number,
    public price: number,
    public produceFrom: string,
    public productionTime: number,
    public isCollectable: boolean,
    public sight: number
  ) {
    this.health = 20;
    this.armor = 0;
    this.position = "ground";
    this.isAttackGround = true;
    this.groundAttackLight = 4;
    this.groundAttackHeavy = 4;
    this.groundAttackSpeed = 5;
    this.groundSplash = 0;
    this.groundRange = 4;
    this.isAttackAir = true;
    this.airAttackLight = 4;
    this.airAttackHeavy = 4;
    this.airAttackSpeed = 5;
    this.airSplash = 0;
    this.airRange = 4;
    this.isMovable = true;
    this.movingSpeed = 3;
    this.price = 30;
    this.produceFrom = "barrack";
    this.productionTime = 10;
    this.isCollectable = false;
    this.sight = 10;
  }
}

/**
 * 중장갑 만능 대지 유닛입니다.
 * 특징 : 강한 대지 유닛으로 대공을 제외한 대부분의 역할을 맡을 수 있습니다.
 */
export class MediumTank implements UnitFormat {
  constructor(
    public health: number,
    public armor: number,
    public position: string,
    public isAttackGround: boolean,
    public groundAttackLight: number,
    public groundAttackHeavy: number,
    public groundAttackSpeed: number,
    public groundSplash: number,
    public groundRange: number,
    public isAttackAir: boolean,
    public airAttackLight: number,
    public airAttackHeavy: number,
    public airAttackSpeed: number,
    public airSplash: number,
    public airRange: number,
    public isMovable: boolean,
    public movingSpeed: number,
    public price: number,
    public produceFrom: string,
    public productionTime: number,
    public isCollectable: boolean,
    public sight: number
  ) {
    this.health = 45;
    this.armor = 2;
    this.position = "ground";
    this.isAttackGround = true;
    this.groundAttackLight = 15;
    this.groundAttackHeavy = 15;
    this.groundAttackSpeed = 3;
    this.groundSplash = 1;
    this.groundRange = 6;
    this.isAttackAir = false;
    this.airAttackLight = 0;
    this.airAttackHeavy = 0;
    this.airAttackSpeed = 0;
    this.airSplash = 0;
    this.airRange = 0;
    this.isMovable = true;
    this.movingSpeed = 3;
    this.price = 100;
    this.produceFrom = "factory";
    this.productionTime = 35;
    this.isCollectable = false;
    this.sight = 10;
  }
}

/**
 * 중장갑 공중 정찰 및 대지 공격 유닛입니다.
 * 특징 : 강하지 않지만 기동성이 좋은 유닛으로 초중반에 주로 유용한 유닛입니다.
 */
export class ReconHeli implements UnitFormat {
  constructor(
    public health: number,
    public armor: number,
    public position: string,
    public isAttackGround: boolean,
    public groundAttackLight: number,
    public groundAttackHeavy: number,
    public groundAttackSpeed: number,
    public groundSplash: number,
    public groundRange: number,
    public isAttackAir: boolean,
    public airAttackLight: number,
    public airAttackHeavy: number,
    public airAttackSpeed: number,
    public airSplash: number,
    public airRange: number,
    public isMovable: boolean,
    public movingSpeed: number,
    public price: number,
    public produceFrom: string,
    public productionTime: number,
    public isCollectable: boolean,
    public sight: number
  ) {
    this.health = 40;
    this.armor = 1;
    this.position = "air";
    this.isAttackGround = true;
    this.groundAttackLight = 8;
    this.groundAttackHeavy = 8;
    this.groundAttackSpeed = 2;
    this.groundSplash = 0;
    this.groundRange = 4;
    this.isAttackAir = false;
    this.airAttackLight = 0;
    this.airAttackHeavy = 0;
    this.airAttackSpeed = 0;
    this.airSplash = 0;
    this.airRange = 0;
    this.isMovable = true;
    this.movingSpeed = 3.5;
    this.price = 60;
    this.produceFrom = "factory";
    this.productionTime = 32;
    this.isCollectable = false;
    this.sight = 10;
  }
}
