export const render_control = {
    robot_control_loadmap_req : 
        `
        <div class="row gy-2 mt-3">
            <div class="col-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6">
                <span class="mb-1 "><b>1. Chuyển map</b></span>
                <div class="photo d-flex align-items-center">
                    <img src="/images/robot_control_loadmap_req.PNG" alt="" style="object-fit: contain; width: 100%;">
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6 py-2">
                <form action="#" class="form_map_name">
                    <div>
                        <div class="mb-1">Tên map</div>
                        <div class="d-flex gap-3 mb-2">
                            <label for="exampleFormControlInput1" class="form-label flex-grow-1">
                                <input type="text" name="map_name" class="form-control map_name_input" id="exampleFormControlInput1" placeholder="Nhập tên map">
                            </label>
                            <button class="btn btn-warning btn_clear_map_name" type="button">Xóa</button>
                        </div>
                    </div>
                    <button class="btn btn-primary">Gửi API</button>
                </form>
            </div>
        </div>
        `,
    robot_control_reloc_req: 
        `
            <div class="row gy-2 mt-3 ">
                <div class="w-20 add_point_relocation">
                    <button class="btn btn-primary">Thêm điểm Relocation</button>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6 ">
                    <div class="table-monitor">
                        <div class="table-title">
                            <b>Các điểm Relocation</b>
                        </div>
                        <ul class="monitor-menu list_point_relocation">
                            
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6">
                    <div class="table-monitor">
                        <div class="table-title">
                            <b>Trạng thái AMR</b>
                        </div>
                        <ul class="monitor-menu">
                            <li>
                                <span>
                                    <i class="fa-solid fa-earth-americas"></i>
                                </span>
                                <span>Độ chính xác: </span>
                                <span class="control-confidence mx-1"></span>
                            </li>
                            <li>
                                <span class="mr-1">
                                    <i class="fa-regular fa-circle-check"></i>
                                </span>
                                <span>Trạng thái Relocation:</span>
                                <span class="control_reloc_status mx-1"></span>
                            </li>
                            <li>
                                <span class="mr-1">
                                    <i class="fa-solid fa-location-dot"></i>
                                </span>
                                <span>Tọa độ AMR:</span>
                                <span class="control_coordinates mx-1"></span>
                            </li>
                        </ul>
                    </div>
                    <form action="#" class="form_confirm_location mt-3">
                    </form>
                </div>    
            </div>
            <div class="overlay_show_add_relocation">
                <div class="overlay_show">
                    <h3 class="title">Thêm điểm Relocation</h3>
                    <div class="row gy-2 mt-3 over_lay_show_content">
                        <div class="col-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6 py-2">
                            <form action="#" class="form_relocation">
                                <div>
                                    <div class="mb-1"><b>Ten Relocation</b></div>
                                    <div class="d-flex gap-3">
                                        <label class="form-label flex-grow-1">
                                            <input type="text" name="name" class="form-control relocation_name"  placeholder="Nhập ten relocation">
                                        </label>
                                        <button type="button" class="btn btn-warning btn_remove_relocation_x">Xóa</button>
                                    </div>
                                </div>
                                <div>
                                    <div class="mb-1"><b>Tọa độ trục x</b></div>
                                    <div class="d-flex gap-3">
                                        <label class="form-label flex-grow-1">
                                            <input type="text" name="x" class="form-control relocation_x" id="exampleFormControlInput1" placeholder="Nhập tọa độ trục x">
                                        </label>
                                        <button type="button" class="btn btn-warning btn_remove_relocation_x">Xóa</button>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <div class="mb-1"><b>Tọa độ trục y</b></div>
                                    <div class="d-flex gap-3">
                                        <label class="form-label flex-grow-1">
                                            <input type="text" name="y" class="form-control relocation_y" id="exampleFormControlInput1" placeholder="Nhập tọa độ trục y">
                                        </label>
                                        <button type="button" class="btn btn-warning btn_remove_relocation_y">Xóa</button>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <div class="mb-1"><b>Tọa độ góc</b></div>
                                    <div class="d-flex gap-3">
                                        <label class="form-label flex-grow-1">
                                            <input type="text" name="angle" class="form-control relocation_angle" id="exampleFormControlInput1" placeholder="Nhập tọa độ góc">
                                        </label>
                                        <button type="button" class="btn btn-warning btn_remove_relocation_angle">Xóa</button>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <div class="mb-1"><b>Bán kính Relocation - m</b></div>
                                    <div class="d-flex gap-3">
                                        <label class="form-label flex-grow-1">
                                            <input type="text" name="length" class="form-control relocation_length" id="exampleFormControlInput1" placeholder="Nhập bán kính relocation">
                                        </label>
                                        <button type="button" class="btn btn-warning btn_remove_relocation_length">Xóa</button>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary btn_add_relocation">Add</button>
                                <button type="button" class="btn btn-danger btn_exit_add_relocation">Thoát</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `,
    robot_control_comfirmloc_req: 
        `
            <div class="row gy-2 mt-3">
                <div class="col-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6">
                    <div class="table-monitor">
                        <div class="table-title">
                            <b>Trạng thái AMR</b>
                        </div>
                        <ul class="monitor-menu">
                            <li>
                                <span class="mr-1">
                                    <i class="fa-regular fa-circle-check"></i>
                                </span>
                                <span>Trạng thái Relocation:</span>
                                <span class="control_reloc_status mx-1"></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6 py-2">
                    <form action="#" class="form_confirm_location">
                        <b class="me-3">Gửi API xác nhận: </b>
                        <button class="btn btn-primary px-4">Gửi </button>
                    </form>
                </div>
            </div>
        `
}