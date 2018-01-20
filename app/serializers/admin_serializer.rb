class AdminSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone, :company_name, :email
end
