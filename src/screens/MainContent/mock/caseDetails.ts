/* eslint-disable max-len */
export default {
  case_data: {
    sl_sentiment_score: 50,
    sl_need_attention_score: 35,
  },
  comments: [
    {
      body: "From Bugzilla Helper:\nUser-Agent: Mozilla/4.75 [en] (X11; U; SunOS 5.6 sun4u)\n\nThis may be an issue with the ext2 filesystem itself rather than e2fsprogs,\nbut this\nis the nearest appropriate component I could find.  I have been having files go missing for a couple of days (which I initially\nblamed on tmpwatch in bug 27145).  However today some ext2fs errors appeared\non the\nconsole.  When I rebooted the system I had to run fsck manually which\nreported a lot of errors.  A bit frustrating I had to ask on three separate occasions to get an answer that actually seems correct.  Have I been unlucky to hit a bad block, or are\nthere underlying problems with the filesystem software?  (I don't remember\nany problems before I upgraded to Fisher).  Reproducible: Didn't try\n\nHere are some extracts from /var/adm/messages\nFeb 14 09:23:33 itspc116 kernel: attempt to access beyond end of device\nFeb 14 09:23:33 itspc116 kernel: 03:03: rw=0, want=8388820, limit=901152\nFeb 14 09:23:33 itspc116 kernel: EXT2-fs error (device ide0(3,3)):\next2_readdir:\n directory #54593 contains a hole at offset 0\nFeb 14 09:23:33 itspc116 kernel: attempt to access beyond end of device\nFeb 14 09:23:33 itspc116 kernel: 03:03: rw=0, want=10485788, limit=901152\nFeb 14 09:23:33 itspc116 kernel: EXT2-fs error (device ide0(3,3)):\next2_readdir:\n directory #54593 contains a hole at offset 4096\nFeb 14 09:23:33 itspc116 kernel: attempt to access beyond end of device\nFeb 14 09:23:33 itspc116 kernel: 03:03: rw=0, want=6291560, limit=901152\nFeb 14 09:23:33 itspc116 kernel: EXT2-fs error (device ide0(3,3)):\next2_readdir:\n directory #54593 contains a hole at offset 8192\nFeb 14 09:23:33 itspc116 kernel: attempt to access beyond end of device\nFeb 14 09:23:33 itspc116 kernel: 03:03: rw=2, want=538050772, limit=901152\nFeb 14 09:23:33 itspc116 kernel: EXT2-fs error (device ide0(3,3)):\next2_readdir:\n bad entry in directory #54593: rec_len %% 4 != 0 - offset=0, inode=33188,\nrec_l\nen=831, name_len=0",
      author_name: 'Dos Admin',
      sl_created_at: '2023-11-23 14:18:45+00:00',
      spans: [
        {
          c_begin: 473,
          c_end: 577,
          Frustration: true,
        },
      ],
    },
    {
      body: '2 - From Bugzilla Helper:\nUser-Agent: Mozilla/4.75 [en] (X11; U; SunOS 5.6 sun4u)\n\nThis may be an issue with the ext2 filesystem itself rather than e2fsprogs,\nbut this\nis the nearest appropriate component I could find.  I have been having files go missing for a couple of days',
      author_name: 'Dos Admin',
      sl_created_at: '2023-11-24 14:18:45+00:00',
      spans: [
        {
          c_begin: 473,
          c_end: 577,
          Frustration: true,
        },
      ],
    },
    {
      body: '3 - From Bugzilla Helper:\nUser-Agent: Mozilla/4.',
      author_name: 'Dos Admin',
      sl_created_at: '2023-11-24 13:18:45+00:00',
      spans: [
        {
          c_begin: 473,
          c_end: 577,
          Frustration: true,
        },
      ],
    },
    {
      body: '4 - From Bugzilla ',
      author_name: 'Dos Admin',
      sl_created_at: '2023-11-22 12:18:45+00:00',
      spans: [
        {
          c_begin: 473,
          c_end: 577,
          Frustration: true,
        },
      ],
    },
    {
      body: '5 -  have been having files go missing for a couple of days',
      author_name: 'Dos Admin',
      sl_created_at: '2023-11-25 10:18:45+00:00',
      spans: [
        {
          c_begin: 473,
          c_end: 577,
          Frustration: true,
        },
      ],
    },
    {
      body: '6 -I could find.  I have been having files go missing for a couple of days',
      author_name: 'Dos Admin',
      sl_created_at: '2023-11-20 11:18:45+00:00',
      spans: [
        {
          c_begin: 473,
          c_end: 577,
          Frustration: true,
        },
      ],
    },
  ],
  segments: [
    {
      s_id: 'd6329bfd-2ff9-4ba9-be4a-fe4753cec109',
      s_created_at: '2023-11-30T06:47:47.899811',
      original_content: 'directory #54593 contains a hole at offset 8192',
      notes: [
        {
          s_id: '742c8bb3-1780-405c-b5d2-d96b1840639b',
          s_created_at: '2023-11-30T06:47:48.244148',
          body: 'comment six is added, comment six is added, comment six is added, comment six is added, comment six is added, comment six is added, comment six is added, comment six is added, comment six is added, comment six is addedz',
          creator: {
            name: 'Sasikumar Ganesan',
            s_id: '64e55ae1-b36b-466e-902d-0c031919aa95',
            user_photo:
              'https://avatars.slack-edge.com/2022-03-31/3340856248849_25ab7c248489d756b92e_48.png',
          },
        },
        {
          s_id: 'f7b6754a-a2a1-4ae8-a09c-a63552d203c6',
          s_created_at: '2023-11-30T10:58:40.892772',
          body: 'Comment six got reply message 4 comment six is added, comment six is added, comment six is added, comment six is added, comment six is added, comment six is added, comment six is added, comment six is added, comment six is added, comment six is added',
          creator: {
            name: 'Sasikumar Ganesan',
            s_id: '64e55ae1-b36b-466e-902d-0c031919aa95',
            user_photo:
              'https://avatars.slack-edge.com/2022-03-31/3340856248849_25ab7c248489d756b92e_48.png',
          },
        },
        {
          s_id: '0eb04738-71f6-40e6-b5ca-209000b5ca45',
          s_created_at: '2023-11-30T10:58:33.744268',
          body: 'Comment six got reply message 3',
          creator: {
            name: 'Sasikumar Ganesan',
            s_id: '64e55ae1-b36b-466e-902d-0c031919aa95',
            user_photo:
              'https://avatars.slack-edge.com/2022-03-31/3340856248849_25ab7c248489d756b92e_48.png',
          },
        },
        {
          s_id: 'b60fe03e-dca2-4cb0-82db-603c95fbe7a2',
          s_created_at: '2023-11-30T07:24:34.034004',
          body: 'Comment six got reply message AGAIN',
          creator: {
            name: 'Sasikumar Ganesan',
            s_id: '64e55ae1-b36b-466e-902d-0c031919aa95',
            user_photo:
              'https://avatars.slack-edge.com/2022-03-31/3340856248849_25ab7c248489d756b92e_48.png',
          },
        },
        {
          s_id: 'e99daa83-66b4-401b-bdd6-5292d077de3f',
          s_created_at: '2023-11-30T06:48:31.788824',
          body: 'Comment six got reply message',
          creator: {
            name: 'Sasikumar Ganesan',
            s_id: '64e55ae1-b36b-466e-902d-0c031919aa95',
            user_photo:
              'https://avatars.slack-edge.com/2022-03-31/3340856248849_25ab7c248489d756b92e_48.png',
          },
        },
      ],
    },
    {
      s_id: 'a23e47f6-3dc2-4ebf-8385-3a688705352f',
      s_created_at: '2023-11-29T12:36:31.544754',
      original_content:
        "any problems before I upgraded to Fisher).  Reproducible: Didn't try",
      notes: [
        {
          s_id: '35bd14d8-a839-435e-8ed3-47918b666726',
          s_created_at: '2023-11-29T12:36:31.827500',
          body: 'Comment five',
          creator: {
            name: 'Sasikumar Ganesan',
            s_id: '64e55ae1-b36b-466e-902d-0c031919aa95',
            user_photo:
              'https://avatars.slack-edge.com/2022-03-31/3340856248849_25ab7c248489d756b92e_48.png',
          },
        },
        {
          s_id: 'e2242494-c1c0-49db-9e27-cc0285efcc8e',
          s_created_at: '2023-11-30T10:36:06.892906',
          body: 'Comment 5 reply 1',
          creator: {
            name: 'Sasikumar Ganesan',
            s_id: '64e55ae1-b36b-466e-902d-0c031919aa95',
            user_photo:
              'https://avatars.slack-edge.com/2022-03-31/3340856248849_25ab7c248489d756b92e_48.png',
          },
        },
      ],
    },
  ],
};
