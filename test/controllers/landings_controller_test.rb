require 'test_helper'

class LandingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @landing = landings(:one)
  end

  test "should get index" do
    get landings_url, as: :json
    assert_response :success
  end

  test "should create landing" do
    assert_difference('Landing.count') do
      post landings_url, params: { landing: { title: @landing.title } }, as: :json
    end

    assert_response 201
  end

  test "should show landing" do
    get landing_url(@landing), as: :json
    assert_response :success
  end

  test "should update landing" do
    patch landing_url(@landing), params: { landing: { title: @landing.title } }, as: :json
    assert_response 200
  end

  test "should destroy landing" do
    assert_difference('Landing.count', -1) do
      delete landing_url(@landing), as: :json
    end

    assert_response 204
  end
end
