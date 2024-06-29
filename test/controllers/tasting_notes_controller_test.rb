require "test_helper"

class TastingNotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tasting_note = tasting_notes(:one)
  end

  test "should get index" do
    get tasting_notes_url, as: :json
    assert_response :success
  end

  test "should create tasting_note" do
    assert_difference("TastingNote.count") do
      post tasting_notes_url, params: { tasting_note: { review: @tasting_note.review, user_id: @tasting_note.user_id, wine_id: @tasting_note.wine_id } }, as: :json
    end

    assert_response :created
  end

  test "should show tasting_note" do
    get tasting_note_url(@tasting_note), as: :json
    assert_response :success
  end

  test "should update tasting_note" do
    patch tasting_note_url(@tasting_note), params: { tasting_note: { review: @tasting_note.review, user_id: @tasting_note.user_id, wine_id: @tasting_note.wine_id } }, as: :json
    assert_response :success
  end

  test "should destroy tasting_note" do
    assert_difference("TastingNote.count", -1) do
      delete tasting_note_url(@tasting_note), as: :json
    end

    assert_response :no_content
  end
end
