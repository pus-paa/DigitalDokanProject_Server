
import {Table,Column,Model,DataType, PrimaryKey} from "sequelize-typescript"

@Table({
    tableName : "users",
    modelName : "User",
    timestamps : true
})

class User extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID,
        defaultValue : DataType.UUID,

        
    })
    declare id : string
    

    @Column({
        type : DataType.STRING
    })
    declare username : string

    @Column({
        type : DataType.STRING

    })
    declare  email : string

    @Column({
        type : DataType.STRING
    })

    declare password :string

    @Column({
        type :DataType.ENUM('customer','admin'),
        defaultValue :'customer'
    })
    declare role : string

}

export default User
