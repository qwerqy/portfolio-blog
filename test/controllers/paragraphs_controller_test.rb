require 'test_helper'

class ParagraphsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @paragraph = paragraphs(:one)
  end

  test "should get index" do
    get paragraphs_url, as: :json
    assert_response :success
  end

  test "should create paragraph" do
    assert_difference('Paragraph.count') do
      post paragraphs_url, params: { paragraph: { content: @paragraph.content, github: @paragraph.github, live: @paragraph.live, photos: @paragraph.photos, title: @paragraph.title } }, as: :json
    end

    assert_response 201
  end

  test "should show paragraph" do
    get paragraph_url(@paragraph), as: :json
    assert_response :success
  end

  test "should update paragraph" do
    patch paragraph_url(@paragraph), params: { paragraph: { content: @paragraph.content, github: @paragraph.github, live: @paragraph.live, photos: @paragraph.photos, title: @paragraph.title } }, as: :json
    assert_response 200
  end

  test "should destroy paragraph" do
    assert_difference('Paragraph.count', -1) do
      delete paragraph_url(@paragraph), as: :json
    end

    assert_response 204
  end
end
