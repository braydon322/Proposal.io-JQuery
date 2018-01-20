class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone, :company_name, :admin_id, :email
end
