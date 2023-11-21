/* eslint-disable max-len */
export default {
  case_data: { sl_sentiment_score: 53, sl_need_attention_score: 43 },
  comments: [
    {
      body: 'Not happy with your support.  after saying "reading package information", I get:\n\nTraceback (innermost last):\n  File "/usr/bin/anaconda.real", line 438, in ?  intf.run(todo, test = test)\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/text.py", line 1030, in \nrun\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/textw/packages_text.py", \nline 33, in __call__\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/todo.py", line 539, in \ngetCompsList\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/harddrive.py", line 43, \nin readComps\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/comps.py", line 459, in \n__init__\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/comps.py", line 428, in \nreadCompsFile\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/comps.py", line 101, in \n__getitem__\nKeyError: MAKEDEV\nLocal variables in innermost frame:\nself: \nitem: MAKEDEV\nToDo object:\n(itodo\nToDo\np1\n(dp2\nS\'method\'\np3\n(iharddrive\nHardDriveInstallMethod\np4\n(dp5\nS\'fstype\'\np6\nS\'vfat\'\np7\nsS\'isMounted\'\np8\nI1\nsS\'fnames\'\np9\n(dp10\n',
      author_name: 'Dos Admin',
      sl_created_at: '2023-10-24 16:53:59+00:00',
      spans: [{ c_begin: 0, c_end: 28, Negative: true }],
    },
    {
      body: '0052E000003jLEXQA2,2023-10-28 06:08:49.548565+00:00\n\nCreated attachment 3689\nAnaconda Dump',
      author_name: 'Dos Admin',
      sl_created_at: '2023-10-28 06:08:49+00:00',
      spans: [{ c_begin: 933, c_end: 1041, Frustration: true }],
    },
    {
      body: '0052E000003jL9EQAU,2023-10-29 00:15:01.548565+00:00\n\nI get the same problem. I\'m setup as follows:\n\n- PII/300, 128MB, ATI FURY 128, 3Com509B, 10.2GBHDD. \n\nAny help would be appreciated.\n\nJ.\n\n--------------------------------------------------------\n\nTraceback (innermost last):\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/iw/progress_gui.py", line 20, \nin run\n    rc = self.todo.doInstall ()\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/todo.py", line 1480, in \ndoInstall\n    if self.method.systemMounted (self.fstab, self.instPath, \nself.hdList.selected()):\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/image.py", line 46, in \nsystemMounted\n    self.loopbackFile = mntPoint + fstab.filesystemSpace(mntPoint)[0][0] + \\\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/fstab.py", line 258, in \nfilesystemSpace\n    space.append((mntpoint, isys.fsSpaceAvailable(topMount + \'/\' + mntpoint)))\n  File "/usr/lib/anaconda/isys.py", line 16, in fsSpaceAvailable\n    return _isys.devSpaceFree(fsystem)\nSystemError: (2, \'No such file or directory\')\n\nLocal variables in innermost frame:\nfsystem: /mnt/sysimage//mnt/SAMHAIN/c\n\nToDo object:\n(itodo\nToDo\np1\n(dp2\nS\'method\'\np3\n(iimage\nCdromInstallMethod\np4\n(dp5\nS\'progressWindow\'\np6\n\n',
      author_name: 'Dos Admin',
      sl_created_at: '2023-11-01 10:41:14+00:00',
      spans: [{ c_begin: 933, c_end: 1041, Frustration: true }],
    },
    {
      body: '0052E000003jL9dQAE,2023-11-01 10:41:14.157495+00:00\n\nI go through package selection and all that fine; I get the "Loopback: creating\nloopback filesystem on /dev/hdb5..." window; it does its thing and eventually\ngoes away, replaced by a "Formatting: formatting / filesystem" window, which\nlasts about 5-10 seconds or so, give or take...before I get a popup with the\ncontents attached below.  I can go no farther, and the install fails and I\'m\ndone.\n\nNow, before you go and hit  Ctrl-V and  paste what seems to have become the standard, no-fault reply, read on.\n\n I\'ve read almost everything there is  to read about this; I\'ve tried the update img.  No dice.\n\nYou\'ve mentioned corrupt HD install files over and  over again.  Well,  I\'m doing an FTP install, and have tried a variety of mirrors. Still no dice.  I\'ve remade all the  boot disks, drivers disk, and  updates disk several times. Carefully, methodically.\n \nStill no dice.   And I\'m apparently not the only one who still can\'t overcome the problem, despite no small amount of trying.\n\nMy suggestion is that there really IS something more going on here than bad/corrupt FTP\'ing.  The update isn\'t working for everyone. Something ELSE is happening.\n\nNow, what is it?\n\nPlease,  toss this around with your folks a bit more.\n\nThanks for your time.\n\n-agf\n\n============\n\nTraceback (innermost last):\n  File "/usr/bin/anaconda.real", line 438, in ?\n    intf.run(todo, test = test)\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/text.py", line 1030, in run\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/text.py", line 507, in\n__call__\n  File "/var/tmp/anaconda-7.0.1//usr/lib/anaconda/todo.py", line 1466, in\ndoInstall\n  File "fstab.py", line 666, in makeFilesystems\n  File "/usr/lib/anaconda/isys.py", line 116, in umount\n    mountCount[what] = mountCount - 1\nTypeError: bad operand type(s) for -\n\n===========',
      author_name: 'Dos Admin',
      sl_created_at: '2023-11-01 10:41:14+00:00',
      spans: [
        { c_begin: 933, c_end: 1041, Frustration: true },
        { c_begin: 1306, c_end: 1865, Footer: true },
      ],
    },
    {
      body: '0052E000003jLEXQA2,2023-10-28 17:34:20.548565+00:00\n\n*** Bug 18241 has been marked as a duplicate of this bug. ***',
      author_name: 'Dos Admin',
      sl_created_at: '2023-11-01 10:35:59+00:00',
      spans: [{ c_begin: 51, c_end: 114, Footer: true }],
    },
  ],
};
