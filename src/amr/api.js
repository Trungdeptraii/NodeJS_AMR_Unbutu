class status{
    constructor(){
        this.robot_status_info_req                    = {req: 1000, res: 11000}   //Robot Information inquiry
        this.robot_status_run_req                     = {req: 1002, res: 11002}   //Robot running information inquiry(Such as running time, mileage, etc.)
        this.robot_status_loc_req                     = {req: 1004, res: 11004}   //Robot localtion inquiry
        this.robot_status_speed_req                   = {req: 1005, res: 11005}   //Robot speed inquiry
        this.robot_status_block_req                   = {req: 1006, res: 11006}   //Robot blocked status inquiry
        this.robot_status_battery_req                 = {req: 1007, res: 11007}   //Robot battery status inquiry
        this.robot_status_laser_req                   = {req: 1009, res: 11009}   //Robot laser status inquiry
        this.robot_status_path_req                    = {req: 1010, res: 11010}   //Robot path status inquiry
        this.robot_status_area_req                    = {req: 1011, res: 11011}   //Robot area status inquiry
        this.robot_status_emergency_req               = {req: 1012, res: 11012}   //Robot estop status inquiry
        this.robot_status_io_req                      = {req: 1013, res: 11013}   //Robot I/O status inquiry
        this.robot_status_imu_req                     = {req: 1014, res: 11014}   //Robot IMU data inquiry
        this.robot_status_rfid_req                    = {req: 1015, res: 11015}   //Robot RFID data inquiry
        this.robot_status_ultrasonic_req              = {req: 1016, res: 11016}   //Robot ultrasonic status inquiry
        this.robot_status_pgv_req                     = {req: 1017, res: 11017}   //Robot PGV data inquiry
        this.robot_status_encoder_req                 = {req: 1018, res: 11018}   //Robot encoder status inquiry
        this.robot_status_task_req                    = {req: 1020, res: 11020}   //Robot navigation status inquiry, such as navigation target, navigation related path, etc.
        this.robot_status_reloc_req                   = {req: 1021, res: 11021} 	//Robot localization status inquiry
        this.robot_status_loadmap_req                 = {req: 1022, res: 11022} 	//Robot map loading status inquiry
        this.robot_status_slam_req                    = {req: 1025, res: 11025} 	//Robot SLAM status inquiry
        this.robot_status_jack_req                    = {req: 1027, res: 11027} 	//Robot jack status inquiry
        this.robot_status_fork_req                    = {req: 1028, res: 11028} 	//Robot fork status inquiry
        this.robot_status_roller_req                  = {req: 1029, res: 11029} 	//Robot roller status inquiry
        this.robot_status_dispatch_req                = {req: 1030, res: 11030} 	//Robot dispatching status inquiry
        this.robot_status_motor_req                   = {req: 1040, res: 11040} 	//Robot motor status inquiry
        this.robot_status_alarm_req                   = {req: 1050, res: 11050} 	//Robot alarm status inquiry
        this.robot_status_current_lock_req            = {req: 1060, res: 11060} 	//Robot current lock inquiry
        this.robot_status_all1_req                    = {req: 1100, res: 11100} 	//Batch data inquiry 1
        this.robot_status_all2_req                    = {req: 1101, res: 11101} 	//Batch data inquiry 2
        this.robot_status_all3_req                    = {req: 1102, res: 11102} 	//Batch data inquiry 3
        this.robot_status_task_status_package_req     = {req: 1110, res: 11110} 	//Robot task status package inquiry
        this.robot_status_map_req                     = {req: 1300, res: 11300} 	//Loaded map and stored map inquiry
        this.robot_status_station                     = {req: 1301, res: 11301} 	//Station information of currently loaded map
        this.robot_status_params_req                  = {req: 1400, res: 11400} 	//Robot parameters inquiry
    }
}
class control{
    constructor(){
        this.robot_control_stop_req        = {req: 2000, res: 12000} 	//Stop open loop motion
        this.robot_control_reloc_req       = {req: 2002, res: 12002} 	//Relocation
        this.robot_control_comfirmloc_req  = {req: 2003, res: 12003} 	//Confirm location correct
        this.robot_control_cancelreloc_req = {req: 2004, res: 12004} 	//Cancel relocation
        this.robot_control_motion_req      = {req: 2010, res: 12010} 	//Open Loop motion
        this.robot_control_loadmap_req     = {req: 2022, res: 12022} 	//Switch map
    }
}
class navigation{
    constructor(){
        this.robot_task_pause_req             = {req: 3001, res: 13001} 	//Pause navigation
        this.robot_task_resume_req            = {req: 3002, res: 13002} 	//Resume navigation
        this.robot_task_cancel_req            = {req: 3003, res: 13003} 	//Cancel navigation
        this.robot_task_gotarget_req          = {req: 3051, res: 13051} 	//Path navigation(Navigate according to the station and path on the map)
        this.robot_task_gotarget2_req         = {req: 3052, res: 13052} 	//Path navigation 2
        this.robot_task_target_path_req       = {req: 3053, res: 13053} 	//Get the path of the path navigation
        this.robot_task_translate_req         = {req: 3055, res: 13055} 	//Translation, move a fixed distance in a straight line at a fixed speed
        this.robot_task_turn_req              = {req: 3056, res: 13056} 	//Rotation, rotate a fixed angle at a fixed angular speed
        this.robot_task_spin_req              = {req: 3057, res: 13057} 	//Tray rotation
        this.robot_task_circular_req          = {req: 3058, res: 13058} 	//Circular motion
        this.robot_task_gotargetlist_req      = {req: 3066, res: 13066} 	//Designated path navigation(navigate according to the path navigation sequence)
        this.robot_task_cleartargetlist_req   = {req: 3067, res: 13067} 	//Clear Designated path navigation
        this.robot_tasklist_name_req          = {req: 3106, res: 13106} 	//Execute pre-stored tasklist
    }
}
class config{
    constructor(){
        this.robot_config_release_req              = {req: 4002, res: 14002} 	//Release Control
        this.robot_config_src_require_req          = {req: 4003, res: 14003} 	//SRC control mode
        this.robot_config_require_req              = {req: 4001, res: 14001} 	//Require Control
        this.robot_config_src_release_req          = {req: 4004, res: 14004} 	//SRC monitor mode
        this.robot_config_lock_req                 = {req: 4005, res: 14005} 	//Release control
        this.robot_config_unlock_req               = {req: 4006, res: 14006} 	//Release control
        this.robot_config_clearallerrors_req       = {req: 4009, res: 14009} 	//Clear robot's all errors
        this.robot_config_uploadmap_req            = {req: 4010, res: 14010} 	//Push map to robot
        this.robot_config_downloadmap_req          = {req: 4011, res: 14011} 	//Pull map from robot
        this.robot_config_removemap_req            = {req: 4012, res: 14012} 	//Delete map in robot
        this.robot_config_push_req                 = {req: 4091, res: 14091} 	//Configure robot push port
        this.robot_config_ultrasonic_req           = {req: 4130, res: 14130} 	//Configure ultrasonic
        this.robot_config_DI_req                   = {req: 4140, res: 14140} 	//Config DI
        this.robot_config_motor_calib_req          = {req: 4150, res: 14150} 	//Motor Calibration
        this.robot_config_motor_clear_fault_req    = {req: 4151, res: 14151} 	//Motor clear fault
        this.robot_config_addobstacle_req          = {req: 4350, res: 14350} 	//Add dynamic obstacles (robot coordinate system)
        this.robot_config_addgobstacle_req         = {req: 4351, res: 14351} 	//Add dynamic obstacles (world coordinate system)
        this.robot_config_removeobstacle_req       = {req: 4352, res: 14352} 	//Remove dynamic obstacles
        this.robot_config_clear_goodsshape_req     = {req: 4356, res: 14356} 	//Clear shelf description file
        this.robot_config_set_shelfshape_req       = {req: 4357, res: 14357} 	//Set shelf description file
        this.robot_config_seterror_req             = {req: 4800, res: 14800} 	//Set third party Error
        this.robot_config_clearerror_req           = {req: 4801, res: 14801} 	//Clear third party Error
        this.robot_config_setwarning_req           = {req: 4802, res: 14802} 	//Set third party Warning
        this.robot_config_clearwarning_req         = {req: 4803, res: 14803} 	//Clear third party Warning
    }
}
class other{
    constructor(){
    this.robot_other_play_audio_req                              = {req: 6000, res: 16000} 	//Play audio
    this.robot_other_setdo_req                                   = {req: 6001, res: 16001} 	//Set DO
    this.robot_other_setdos_req                                  = {req: 6002, res: 16002} 	//Batch set DO
    this.robot_other_setrelay_req                                = {req: 6003, res: 16003} 	//Set relay
    this.robot_other_softemc_req                                 = {req: 6004, res: 16004} 	//Soft Estop
    this.robot_other_setchargingrelay_req                        = {req: 6005, res: 16005} 	//Set charging relay
    this.robot_other_pause_audio_req                             = {req: 6010, res: 16010} 	//Pause audio
    this.robot_other_resume_audio_req                            = {req: 6011, res: 16011} 	//Resume audio
    this.robot_other_stop_audio_req                              = {req: 6012, res: 16012} 	//Stop audio
    this.robot_other_setvdi_req                                  = {req: 6020, res: 16020} 	//Set virtual DI
    this.robot_other_audio_list_req                              = {req: 6033, res: 16033} 	//Get list of audio files
    this.robot_other_set_fork_height_req                         = {req: 6040, res: 16040} 	//Set fork height
    this.robot_other_stop_fork_req                               = {req: 6041, res: 16041} 	//Stop fork motion
    this.robot_other_set_fork_forward_req                        = {req: 6042, res: 16042} 	//Set fork forward or backward
    this.robot_other_write_peripheral_data_req                   = {req: 6049, res: 16049} 	//Write peripheral user-defined data
    this.robot_other_roller_front_roll_req                       = {req: 6051, res: 16051} 	//Roller rolls forward
    this.robot_other_roller_back_roll_req                        = {req: 6052, res: 16052} 	//Roller rolls backward
    this.robot_other_roller_left_roll_req                        = {req: 6053, res: 16053} 	//Roller rolls to the left
    this.robot_other_roller_right_roll_req                       = {req: 6054, res: 16054} 	//Roller rolls to the right
    this.robot_other_roller_front_load_req                       = {req: 6055, res: 16055} 	//Roller front load
    this.robot_other_roller_front_unload_req                     = {req: 6056, res: 16056} 	//Roller front unload
    this.robot_other_roller_front_pre_load_req                   = {req: 6057, res: 16057} 	//Roller front pre-load
    this.robot_other_roller_back_load_req                        = {req: 6058, res: 16058} 	//Roller back load
    this.robot_other_roller_back_unload_req                      = {req: 6059, res: 16059} 	//Roller back unload
    this.robot_other_roller_back_pre_load_req                    = {req: 6060, res: 16060} 	//Roller back pre-load
    this.robot_other_roller_left_load_req                        = {req: 6061, res: 16061} 	//Roller left load
    this.robot_other_roller_left_unload_req                      = {req: 6062, res: 16062} 	//Roller left unload
    this.robot_other_roller_right_load_req                       = {req: 6063, res: 16063} 	//Roller right load
    this.robot_other_roller_right_unload_req                     = {req: 6064, res: 16064} 	//Roller right unload
    this.robot_other_roller_left_pre_load_req                    = {req: 6065, res: 16065} 	//Roller left pre-load
    this.robot_other_roller_right_pre_load_req                   = {req: 6066, res: 16066} 	//Roller right pre-load
    this.robot_other_roller_stop_req                             = {req: 6067, res: 16067} 	//Roller stop
    this.robot_other_roller_left_right_inverse_req               = {req: 6068, res: 16068} 	//Roller inverse left and right
    this.robot_other_roller_front_back_inverse_req               = {req: 6069, res: 16069} 	//Roller inverse front and back
    this.robot_other_jack_load_req                               = {req: 6070, res: 16070} 	//Jack load
    this.robot_other_jack_unload_req                             = {req: 6071, res: 16071} 	//Jack unload
    this.robot_other_jack_stop_req                               = {req: 6072, res: 16072} 	//Jack stop
    this.robot_other_jack_set_height_req                         = {req: 6073, res: 16073} 	//Jack height
    this.robot_other_reset_cargo_req                             = {req: 6080, res: 16080} 	//Reset cargo
    this.robot_other_hook_load_req                               = {req: 6082, res: 16082} 	//Hook load
    this.robot_other_hook_unload_req                             = {req: 6083, res: 16083} 	//Hook unload
    this.robot_other_slam_req                                    = {req: 6100, res: 16100} 	//Begin SLAM
    this.robot_other_endslam_req                                 = {req: 6101, res: 16101} 	//End SLAM
    this.robot_other_set_motors_req                              = {req: 6200, res: 16200} 	//Motor debugging
    this.robot_other_set_motor_enable_req                        = {req: 6201, res: 16201} 	//Motor enabling and disabling
                }                       
}

module.exports = {
    status: new status, 
    navigation: new navigation, 
    control: new control, 
    config: new config,
    other: new other
}