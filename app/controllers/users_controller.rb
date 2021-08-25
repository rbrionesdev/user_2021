class UsersController < ApplicationController
  def index
    puts "Index called"
    users = User.all
    render component: "Users", props: { users: users }
  end

  def show
    user = User.find(params[:id])
    render component: "User", props: { user: user }
  end

  def new
    render component: "NewUser"
  end

  def create
    # this creates a user in memory
    user = User.new(user_params)
    if user.save
      redirect_to users_path
    else
      #TODO
    end
  end

  def edit
    user = User.find(params[:id])
    render component: "EditUser", props: { user: user }
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      redirect_to users_path
    else
      #TODO
    end

  end


  private
  def user_params
    params.require(:user).permit(:name, :last_name, :age, :phone, :email, :dob, :address)
  end
end
