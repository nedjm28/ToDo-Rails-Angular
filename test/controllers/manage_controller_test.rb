require 'test_helper'

class ManageControllerTest < ActionDispatch::IntegrationTest
  test "should get indexx" do
    get manage_indexx_url
    assert_response :success
  end

end
