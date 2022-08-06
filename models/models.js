const sequelize = require('../bd.js')
const {DataTypes} = require('sequelize')



const User = sequelize.define('user',{
	id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
	email:{type: DataTypes.STRING, unique: true},
	password:{type: DataTypes.STRING},
	role:{type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket',{
	id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const BasketItem = sequelize.define('basket _item',{
	id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const Item = sequelize.define('item',{
	id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
	name:{type: DataTypes.STRING, unique: true, allowNull:false},
	price:{type: DataTypes.INTEGER, allowNull:false},
	img:{type: DataTypes.STRING, unique: true, allowNull:false},
})

const Type = sequelize.define('type',{
	id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
	name:{type: DataTypes.STRING, unique: true, allowNull:false},
})

const Brand = sequelize.define('brand',{
	id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
	name:{type: DataTypes.STRING, unique: true, allowNull:false},
})

const ItemInfo = sequelize.define('item_info',{
	id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
	title:{type: DataTypes.STRING, unique: true, allowNull:false},
	discription:{type: DataTypes.STRING,  allowNull:false},
})

const TypeBrand = sequelize.define('type_brand',{
	id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})




User.hasOne(Basket)
Basket.belongsTo(User)


Basket.hasMany(BasketItem)
BasketItem.belongsTo(Basket)

Type.hasMany(Item)
Item.belongsTo(Type)

Brand.hasMany(Item)
Item.belongsTo(Brand)

Item.hasMany(BasketItem)
BasketItem.belongsTo(Item)

Item.hasMany(ItemInfo, {as:'info'})
ItemInfo.belongsTo(Item)

Brand.belongsToMany(Type, {through: TypeBrand})
Type.belongsToMany(Brand, {through: TypeBrand})


module.exports = {
	User, 
	Basket, 
	BasketItem, 
	Item, 
	Type, 
	Brand, 
	ItemInfo, 
	TypeBrand
}