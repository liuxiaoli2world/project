# !/usr/bin/env python
# -*- coding:utf-8 -*-

import time


def readFile(fileName):
    result = []
    with open(fileName, 'r') as f:
        for line in f.readlines():
            result.append(('ping ' + line).encode(encoding='utf-8'))
    print('读取文件完毕')
    print(result)
    return result

def writeFiles(all, oks, fails):
    # all.append('总数：' + bytes(len(all)-1))
    # all.append('成功个数：' + bytes(len(oks)-1))
    # all.append('失败个数' + bytes(len(fails)-1))
    # oks.append('共'+ bytes(len(oks)-1) + '条记录')
    # fails.append('共'+ bytes(len(fails)-1) + '条记录')

    writeFile(all, '33.txt')
    writeFile(oks, '11.txt')
    writeFile(fails, '22.txt')

def writeFile(array, fileName):
    print('888888888888888')
    print(array)
    print('888888888888888')
    s = ''
    for line in array:
        s += line + '\r'
    with open(fileName.encode(encoding='utf-8'), 'w') as f:
        f.write(s)


def do_telnet(Host, username, password, midway, finish, commands):
    import telnetlib
    import re
    '''''Telnet远程登录：Windows客户端连接Linux服务器'''

    # 连接Telnet服务器
    tn = telnetlib.Telnet(Host, port=23, timeout=10)
    tn.set_debuglevel(2)  # 开启telnet调试模式

    # 输入登录用户名
    tn.read_until(b'Username:')
    tn.write(username + b'\n')

    # 输入登录密码
    tn.read_until(b'Password:')
    tn.write(password + b'\n')

    # 登录完毕后执行命令
    tn.read_until(finish)
    # #print(commands)
    # tn.write(commands+b'\r\n')
    oks = ['成功'.encode(encoding='utf-8')]
    fails = ['失败'.encode(encoding='utf-8')]
    all = []
    # 登录完毕后执行命令
    for command in commands:
        tn.read_until(midway)
        # ip = command.replace('ping', '').replace('\n', '')
        # if re.search(r'Request time out', tn_read) != None:
        #     s = ip + ' fail'
        #     fails.append(s)
        #     all.append(s)
        # else:
        #     s = ip + ' OK'
        #     oks.append(s)
        #     all.append(s)
        # tn.write(b'%s\n' % command)
        tn.write(b'ping 172.26.174.133')
    # writeFiles(all, oks, fails)

    time.sleep(10)  # 这里一定要等待10秒，因为你write命令以后，会等待很长时间，原因不详。
    # 执行完毕后，终止Telnet连接（或输入exit退出）
    tn.read_until(finish)
    tn.write(b'quit\r\n')

    # time.sleep(3)

    result = tn.read_all()
    file_object = open('result.txt', 'wb')
    file_object.write(result)
    file_object.close()
    print('Finish')

    tn.close()


if __name__ == '__main__':
    # 配置选项
    Host = '172.26.255.18'  # Telnet服务器IP
    username = 'jnwhzx'.encode(encoding='utf-8')  # 登录用户名
    password = 'fttxtb'.encode(encoding='utf-8')  # 登录密码
    midway = b'<MidWay>'
    finish = '>'.encode(encoding='utf-8')  # 命令提示符
    commands = readFile('00ips中文.txt'.encode(encoding='utf-8'))
    do_telnet(Host, username, password, midway, finish, commands)
