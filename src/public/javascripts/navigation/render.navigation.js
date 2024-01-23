export const render_navigation = {
    robot_task_gotarget_req: 
    `
        <div class="row gy-2 mt-3">
            <div class="col-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6 py-2">
                <span class="mb-1 "><b>1. Di chuyển điểm</b></span>
                <form action="#" class="form_navigation_go">
                    <div>
                        <div class="mb-1">Điểm di chuyển</div>
                        <div class="d-flex gap-3 mb-2">
                            <label  class="form-label flex-grow-1">
                                <input type="text" name="id" class="form-control navigation_id_input" placeholder="Nhập điểm di chuyển...">
                            </label>
                            <button class="btn btn-warning btn_navigation_clear" type="button">Xóa</button>
                        </div>
                    </div>
                    <div class="my-3 d-flex gap-3">
                        <button class="btn btn-warning btn_navigation_stop">Tạm dừng</button>
                        <button class="btn btn-success btn_navigation_resume">Tiếp tục</button>
                        <button class="btn btn-danger btn_navigation_cancel">Hủy</button>
                    </div>
                    <button class="btn btn-primary">Gửi xác nhận</button>
                </form>
            </div>
        </div>
    `
}