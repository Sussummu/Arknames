//Programmed by LuwenxiSong from @fzlmagazine
//Scripted by LuwenxiSong and BenitaGuo from @fzlmagazine

let group_img;
let metalplat;
let logo_img;
let Actualizar;
let Sussummu;
let Empleo_img = [];
let star_img = [];
let Empleos = ['辅助','近卫','狙击','术士','特种','先锋','医疗','重装',];
let ss1 = ['大号','快捷','实用','便携','运货','轮班','街头','厚礼','约克的','快乐','高级资深','资深','近战','远程','至纯','合成','龙门','赤','高级','十连寻访','加急','高级加固','进阶加固','基础加固','应急','咸蛋黄味','双人','双极','聚合','扭转','三水','轻','五水','提纯','固','改量','全新','破损','异铁','赏金猎人','汐斯塔','黑曜石','终极','加班','物流','清晰','磨砂','小型','迷你','金属','厚叶','未确认','展出','内嵌','稀有植物','生命循环','防爆','舱室','淡绿','工休','红砖','曲底','成对','饮料','独脚','哥伦比亚','玻利瓦尔','大理石','经典','檀木','明亮','深度休息','会客用','近卫局','柚木','复式','深度休息','仿龙门式','披萨店用','现下流行的','手编','毛绒','云杉','原木','复古','原野风韵','塔状','意识流','大都会','近卫局通配','陈的','近卫局用','夏日','沙滩','懒懒','罗德岛','汐斯塔市','全景','盛夏','萨卡兹','雅尔玛汗','悬挂式','排练室','安全舱','补给','防化防毒','多功能','无用处','舱顶','防化','兰赛拉尔','上锁的','双层','珍藏','待运','松软','高功率'];
let ss2 = ['滚轮','组合','灭火','嵌顶','黑色','单色','瓷色','灰色','橘色','白色','理智','纯色','那啥','简装','连锁','仿生', '纳米', '原子', '电子','赛博', '窒息', '变态', '触手', '小众', '电动', '铁锈', '电音', '蠕动',  '虚构', '乱码', '不合格', '光滑', '酸性', '碱性',  '反常', '进化', '潮湿', '砂糖', '高潮', '变异',  '不爱说话', '废物', '失败', '幻想型', '社恐', '苦涩', '浓厚', '快乐', '强制', '中二病',  '限量版', '迷因', '堕落', '放射性', '美味','私人','印象','回忆','自然风光','方舟','吸音','皇家','枯燥','线索'];
let ss3 = ['货架','纸箱','小凳','推车','计算器','盆栽','原型','源石','碎片','凭证','许可','零件','建材','碳','演习券','小样','顶液','合剂','兑换券','片','醇','锰矿','研磨石','源岩','装置','酯','糖','凝胶','合金','金块','助剂','芯片','芯片组','双芯片','信物','手环','勋章','气垫','考勤板','便利贴','涂鸦','公用品','大床','床头柜','办公桌','靠背椅','桌柜','书柜','电视','沙发','茶几','地砖','地毯','公告板','壁灯','壁纸','墙纸','矮茶几','懒人沙发','展览柜','宽地毯','标本集','资料板','顶灯','设施','组件','工作台','垃圾桶','双层床','总控台','显示器','吧台','咖啡椅','书架','储物柜','咖啡桌','街景照','挂画','收银台','餐盘柜','餐盘架','隔断墙','海报架','指示灯','靠背单椅','高架床','壁炉','篓','提琴','置物柜','吊扇','吊灯','房梁','高脚凳','冰柜','钢琴','点唱机','武器架','荣誉状','板','日光灯','荧光灯','聚焦灯','挂历','纪念品','儿童画','壁饰集锦','海报','遮灰帘','资源罐','消毒灯','推床','防毒服','物资箱','工程车','消毒器','阀门','半身像','魔镜','门垫','坩埚','草席','饮料桶','落地灯','流幕帘'];


function preload() {
	for(let i = 1;i<=8;i++){
		Empleo_img[i] = loadImage(`Empleo/${i}.png`);
	}
	for(let i = 1;i<=6;i++){
		star_img[i] = loadImage(`star/${i}.png`);
	}
	group_img= loadImage(`Empleo/group.png`);
	logo_img= loadImage(`logo.png`);
	metalplat= loadImage(`metalplat.png`);
	Sussummu= loadImage(`Sussummu.png`);
}

function setup() {
	createCanvas(500, 200)
	Actualizar = createButton('Actualizar');
	Actualizar.position(430, 200);
	Actualizar.size(70,20);
	Actualizar.mousePressed(Actualizaredraw)
	noLoop()
}

function draw() {
	background(200);
	bg();
	nameGenerator();
	EmpleoGenerator();
	small_square()

}

function nameGenerator() {
	let aa = random(ss1)
	let bb = random(ss2)
	let cc = random(ss3)
	let aa2 = []
	let bb2 = []
	let cc2 = []

	let flag_bb = random(0,1)
	let name1
	let name2
	aa2 = random(aa.split(''))
	bb2 = random(bb.split(''))
	cc2 = random(cc.split(''))
	if (flag_bb>=0.5){
		name1 = aa+bb+cc;
		name2 = aa2+bb2+cc2;
	}else {
		name1 = aa+cc;
		name2 = aa2+cc2;
	}
	fill("#FFFFFF");

	push();
	textSize(30);
	textStyle(NORMAL);
	textAlign(LEFT,CENTER);
	text(name1,21,12,312,41);
	push();
	textSize(40);
	textStyle(NORMAL);
	textAlign(CENTER,CENTER);
	text(name2,161,53,172,63);

	pop();
	pop();
}

function Actualizaredraw() {
	redraw()
}

function bg() {
  	noStroke();
  	fill('#464646');
  	rect(0, 0, 500, 200);
  	image(metalplat,0,0,500,200);
	textSize(12)
	fill("#FFFFFF");
	textStyle(NORMAL);
	textAlign(LEFT, CENTER);
	strokeWeight(0);
	text("明日方舟·沙雕取名器(物品、家具拟人)", 21, 184,141, 16)
	image(group_img,21,53,312,63);
	image(logo_img,374,12,112,56);
	image(Sussummu,394,178);
	add_star()

}

function EmpleoGenerator() {
	let cho = random(1,8);
	push();
	textSize(20);
	textStyle(NORMAL);
	textAlign(CENTER,CENTER);
	text(Empleos[(~~cho)-1], 21, 53,76, 63)
	image(Empleo_img[~~cho],98,53,63,63);
	pop();
	
}

function small_square() {
	push();
	let rr = ~~random(255)
	let gg = ~~random(255)
	let bb = ~~random(255)
	fill(rr,gg,bb);
	square(316, 61, 7);
	pop();
	
}

function add_star() {
	let cho = random(1,6);
	image(star_img[~~cho],21,116);
}

