# -*- coding:utf-8 -*-

pingComStr = 'ping '

# 读取配置
def readConfig():
    with open('config.txt') as f:
        map = {}
        for line in f.readlines():
            ss = line.split('=')
            map[ss[0]] = ss[1].replace('\n', '')

        print map
    return map

# 读取包含ip的文件，一样一个ip
def readFile(fileName):
    result = []
    with open(fileName, 'r') as f:
        for line in f.readlines():
            str = pingComStr + line
            result.append(str)
    return result

# 远程连接
def do_telnet(Host, port, username, password, midway, finish, commands):
    import telnetlib
    import re
    '''Telnet Remote Login'''

    # 连接Telnet服务器
    tn = telnetlib.Telnet(Host, port=23, timeout=10)
    tn.set_debuglevel(2)

    # 输入登录用户名
    tn.read_until('Username:')
    tn.write(username + '\n')

    # 输入登录密码
    tn.read_until('Password:')
    tn.write(password + '\n')

    oks = ['ok']
    fails = ['fail']
    all = []
    tn.read_until(midway)
    # 登录完毕后执行命令  
    for command in commands:
        tn.write('%s\n' % command)
        tn_read = tn.read_until(midway)
        # 根据返回结果写文件
        ip = command.replace(pingComStr, '').replace('\n', '')
        if re.search(r'100.00% packet loss', tn_read) != None: 
            s = ip + ' fail'           
            fails.append(s)
            all.append(s)
        else: 
            s = ip + ' ok'
            oks.append(s)
            all.append(s) 
        
    writeFiles(all, oks, fails)

    # 执行完毕后，终止Telnet连接（或输入exit退出）
    tn.write('%s\n' % finish)
    tn.close()  # tn.write('exit\n')

# 写文件
def writeFiles(all, oks, fails):
    all.append('All: ' + bytes(len(all)))
    all.append('Ok: ' + bytes(len(oks)-1))
    all.append('Fail: ' + bytes(len(fails)-1))
    oks.append('There are '+ bytes(len(oks)-1) + ' items.')
    fails.append('There are '+ bytes(len(fails)-1) + ' items.')

    writeFile(all, '33All.txt'.encode('utf-8'))
    writeFile(oks, '11Ok.txt')
    writeFile(fails, '22Fail.txt')

# 写单个文件
def writeFile(array, fileName):
    s = ''
    for line in array:
        s += line + '\r\n'
    with open(fileName, 'w') as f:
        f.write(s)

if __name__ == '__main__':
    # 配置选项
    config = readConfig()
    Host = config['host']           # Telnet服务器IP
    port = config['port']           # Telnet服务器IP
    username = config['username']   # 登录用户名
    password = config['password']   # 登录密码
    midway = config['path']
    finish = config['finish']       # 命令提示符
    commands = readFile(config['ipsFileName'])  # 需要ping的ip的文件名
    do_telnet(Host, port, username, password, midway, finish, commands)
