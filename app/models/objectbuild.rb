class Objectbuild < ApplicationRecord
    belongs_to :yfcase
    OBJECTBUILD_STATUS_LIST=["自訂","仲介"]
end
