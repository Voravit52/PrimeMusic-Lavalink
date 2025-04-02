module.exports = {
    footer: "พัฒนาโดย SSRR | Prime Music v1.2",
    ping: {
      description: "ตรวจสอบค่าหน่วงเวลา (Latency) ของบอท",
      response: "กำลังทดสอบ...",
      embed: {
        title: "ค่าหน่วงเวลาของบอท",
        responseTime: "- เวลาตอบสนองของบอท : **{latency}ms**",
        websocketPing: "- ค่าหน่วงเวลาของ WebSocket : **{ping}ms**",
        uptime: "- เวลาทำงาน : **{uptime}**",
        footer: "พัฒนาโดย SSRR | Prime Music v1.2"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "ไม่พบเพลย์ลิสต์",
          playlistNotFoundDescription: "- ไม่พบเพลย์ลิสต์ที่ระบุ",
          accessDenied: "ปฏิเสธการเข้าถึง",
          accessDeniedDescription: "- คุณไม่มีสิทธิ์เพิ่มเพลงลงในเพลย์ลิสต์นี้",
          songAdded: "เพิ่มเพลงสำเร็จ",
          songAddedDescription: "- เพลง **{songInput}** ถูกเพิ่มลงในเพลย์ลิสต์ **{playlistName}** แล้ว",
          error: "ข้อผิดพลาด",
          errorDescription: "- เกิดข้อผิดพลาดขณะเพิ่มเพลง"
      }
  },
  allplaylists: {
    embed: {
        noPlaylistsFound: "ไม่พบเพลย์ลิสต์",
        noPlaylistsFoundDescription: "- ขณะนี้ไม่มีเพลย์ลิสต์สาธารณะ",
        createdBy: "สร้างโดย: {userId}",
        serverName: "เซิร์ฟเวอร์: {serverName}",
        songs: "จำนวนเพลง: **{songCount}**",
        publicPlaylistsTitle: "เพลย์ลิสต์สาธารณะ (หน้า {currentPage}/{totalPages})",
        error: "ข้อผิดพลาด",
        errorDescription: "- เกิดข้อผิดพลาดขณะดึงข้อมูลเพลย์ลิสต์"
    }
  },
  autoplay: {
    embed: {
        autoplayUpdated: "อัปเดตการเล่นอัตโนมัติ",
        autoplayStatus: "- การเล่นอัตโนมัติถูก **{status}** สำหรับเซิร์ฟเวอร์นี้",
        enabled: "เปิดใช้งาน",
        disabled: "ปิดใช้งาน",
        error: "ข้อผิดพลาด",
        errorDescription: "- เกิดข้อผิดพลาดขณะอัปเดตการเล่นอัตโนมัติ"
    },
    commandDescription: "เปิดหรือปิดการเล่นอัตโนมัติ"
  },
  createplaylist: {
    embed: {
        playlistExists: "เพลย์ลิสต์มีอยู่แล้ว",
        playlistExistsDescription: "- มีเพลย์ลิสต์ที่ใช้ชื่อนี้อยู่แล้ว",
        playlistCreated: "สร้างเพลย์ลิสต์สำเร็จ",
        playlistCreatedDescription: "- เพลย์ลิสต์ **{playlistName}** ถูกสร้างขึ้นแล้ว\n- สถานะ: **{visibility}**",
        private: "ส่วนตัว",
        public: "สาธารณะ",
        error: "ข้อผิดพลาด",
        errorDescription: "- เกิดข้อผิดพลาดขณะสร้างเพลย์ลิสต์"
    },
    commandDescriptionName: "กรอกชื่อเพลย์ลิสต์",
    commandDescriptionPrivate: "ตั้งค่าเพลย์ลิสต์เป็นส่วนตัว (เห็นได้เฉพาะคุณ)"
  },
  deleteplaylist: {
    embed: {
        playlistNotFound: "ไม่พบเพลย์ลิสต์",
        playlistNotFoundDescription: "- ไม่พบเพลย์ลิสต์ที่ระบุ",
        accessDenied: "ปฏิเสธการเข้าถึง",
        accessDeniedDescription: "- คุณไม่มีสิทธิ์ลบเพลย์ลิสต์นี้",
        playlistDeleted: "ลบเพลย์ลิสต์สำเร็จ",
        playlistDeletedDescription: "- เพลย์ลิสต์ **{playlistName}** ถูกลบแล้ว",
        error: "ข้อผิดพลาด",
        errorDescription: "- เกิดข้อผิดพลาดขณะลบเพลย์ลิสต์"
    },
    commandDescriptionName: "กรอกชื่อเพลย์ลิสต์"
  },
  volume: {
    embed: {
        noActivePlayer: "ข้อผิดพลาด",
        noActivePlayerDescription: "- ไม่พบเครื่องเล่นที่กำลังทำงานอยู่",
        volumeUpdated: "อัปเดตระดับเสียง!",
        volumeUpdatedDescription: "- ระดับเสียงถูกตั้งค่าเป็น **{volume}%**",
        error: "ข้อผิดพลาด",
        errorDescription: "เกิดข้อผิดพลาดขณะตั้งค่าระดับเสียง"
    },
    volumeRangeError: "ระดับเสียงต้องอยู่ระหว่าง 0 ถึง 100"
  },
  errors: {
    noPermission: "คุณไม่มีสิทธิ์ใช้คำสั่งนี้",
    generalError: "- ข้อผิดพลาด: {error}"
  }
};
