interface BuildingFormat {
  health: number; //체력
  armor: number; //방어력
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
  price: number; //건설 비용
  buildTime: number; //건설 시간
  isCollectable: boolean; //자원 채집(저장) 가능 여부
  sight: number; //시야 범위
  isBase: boolean; //사령부 여부 확인 (광부 복귀 알고리즘용)
  targetPriority: number; //공격 대상 지정순위 (1 ~ 3(3에 가까울 수록 높은 확률))
}

class CommandCenter implements BuildingFormat {
  constructor(
    public health: number,
    public armor: number,
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
    public price: number,
    public buildTime: number,
    public isCollectable: boolean,
    public sight: number,
    public isBase: boolean,
    public targetPriority: number
  ) {
    this.health = 500;
    this.armor = 1;
    this.isAttackGround = false;
    this.groundAttackLight = 0;
    this.groundAttackHeavy = 0;
    this.groundAttackSpeed = 0;
    this.groundSplash = 0;
    this.groundRange = 0;
    this.isAttackAir = false;
    this.airAttackLight = 0;
    this.airAttackHeavy = 0;
    this.airAttackSpeed = 0;
    this.airSplash = 0;
    this.airRange = 0;
    this.price = 250;
    this.buildTime = 80;
    this.isCollectable = true;
    this.sight = 12;
    this.isBase = true;
    this.targetPriority = 1.0;
  }
}

class Barrack implements BuildingFormat {
  constructor(
    public health: number,
    public armor: number,
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
    public price: number,
    public buildTime: number,
    public isCollectable: boolean,
    public sight: number,
    public isBase: boolean,
    public targetPriority: number
  ) {
    this.health = 400;
    this.armor = 1;
    this.isAttackGround = false;
    this.groundAttackLight = 0;
    this.groundAttackHeavy = 0;
    this.groundAttackSpeed = 0;
    this.groundSplash = 0;
    this.groundRange = 0;
    this.isAttackAir = false;
    this.airAttackLight = 0;
    this.airAttackHeavy = 0;
    this.airAttackSpeed = 0;
    this.airSplash = 0;
    this.airRange = 0;
    this.price = 100;
    this.buildTime = 50;
    this.isCollectable = false;
    this.sight = 12;
    this.isBase = false;
    this.targetPriority = 1.2;
  }
}

class Factory implements BuildingFormat {
  constructor(
    public health: number,
    public armor: number,
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
    public price: number,
    public buildTime: number,
    public isCollectable: boolean,
    public sight: number,
    public isBase: boolean,
    public targetPriority: number
  ) {
    this.health = 450;
    this.armor = 2;
    this.isAttackGround = false;
    this.groundAttackLight = 0;
    this.groundAttackHeavy = 0;
    this.groundAttackSpeed = 0;
    this.groundSplash = 0;
    this.groundRange = 0;
    this.isAttackAir = false;
    this.airAttackLight = 0;
    this.airAttackHeavy = 0;
    this.airAttackSpeed = 0;
    this.airSplash = 0;
    this.airRange = 0;
    this.price = 200;
    this.buildTime = 60;
    this.isCollectable = false;
    this.sight = 12;
    this.isBase = false;
    this.targetPriority = 1.2;
  }
}

class SupplyDepot implements BuildingFormat {
  constructor(
    public health: number,
    public armor: number,
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
    public price: number,
    public buildTime: number,
    public isCollectable: boolean,
    public sight: number,
    public isBase: boolean,
    public targetPriority: number
  ) {
    this.health = 200;
    this.armor = 1;
    this.isAttackGround = false;
    this.groundAttackLight = 0;
    this.groundAttackHeavy = 0;
    this.groundAttackSpeed = 0;
    this.groundSplash = 0;
    this.groundRange = 0;
    this.isAttackAir = false;
    this.airAttackLight = 0;
    this.airAttackHeavy = 0;
    this.airAttackSpeed = 0;
    this.airSplash = 0;
    this.airRange = 0;
    this.price = 60;
    this.buildTime = 30;
    this.isCollectable = false;
    this.sight = 12;
    this.isBase = false;
    this.targetPriority = 1.0;
  }
}
