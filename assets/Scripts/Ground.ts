import { _decorator, Canvas, Component, director, Node, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Ground')
export class Ground extends Component {
    @property({
        type: Node,
        tooltip: "Ground 1 is here"
    })
    private ground1: Node;

    @property({
        type: Node,
        tooltip: "Ground 2 is here"
    })
    private ground2: Node;

    @property({
        type: Node,
        tooltip: "Ground 3 is here"
    })
    private ground3: Node;

    private groundWidth1: number;
    private groundWidth2: number;
    private groundWidth3: number;

    private tempStartLocation1 = new Vec3();
    private tempStartLocation2 = new Vec3();
    private tempStartLocation3 = new Vec3();

    private readonly gameSpeed = 50;

    protected override onLoad(): void {
        this.startUp();
    }

    private startUp(): void {
        this.groundWidth1 = this.ground1.getComponent(UITransform).width;
        this.groundWidth2 = this.ground2.getComponent(UITransform).width;
        this.groundWidth3 = this.ground3.getComponent(UITransform).width;

        this.tempStartLocation1.x = 0;
        this.tempStartLocation2.x = this.groundWidth1;
        this.tempStartLocation3.x = this.groundWidth1 + this.groundWidth2;

        this.ground1.setPosition(this.tempStartLocation1);
        this.ground2.setPosition(this.tempStartLocation2);
        this.ground3.setPosition(this.tempStartLocation3);
    }

    protected override update(deltaTime: number) {
        this.tempStartLocation1 = this.ground1.position.clone();
        this.tempStartLocation2 = this.ground2.position.clone();
        this.tempStartLocation3 = this.ground3.position.clone();

        this.tempStartLocation1.x -= this.gameSpeed * deltaTime;
        this.tempStartLocation2.x -= this.gameSpeed * deltaTime;
        this.tempStartLocation3.x -= this.gameSpeed * deltaTime;

        const scene = director.getScene();
        const canvas = scene.getComponentInChildren(Canvas);
        const canvasWidth = canvas.getComponent(UITransform).width;

        if (this.tempStartLocation1.x <= -this.groundWidth1) {
            this.tempStartLocation1.x = canvasWidth;
        } else if (this.tempStartLocation2.x <= -this.groundWidth2) {
            this.tempStartLocation2.x = canvasWidth;
        } else if (this.tempStartLocation3.x <= -this.groundWidth3) {
            this.tempStartLocation3.x = canvasWidth;
        }

        this.ground1.setPosition(this.tempStartLocation1);
        this.ground2.setPosition(this.tempStartLocation2);
        this.ground3.setPosition(this.tempStartLocation3);
    }
}


