import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

import { Container, FileInfo, Preview } from './styles'

const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="" />
                <div>
                    <strong>profile.png</strong>
                    <span>64b <button onClick={() => { }}></button></span>
                </div>

            </FileInfo>

            <div>
                <CircularProgressbar
                    styles={{
                        root: { width: 24 },
                        path: { stroke: '7159c1' }
                    }}
                    strokeWidth={10}
                    percentage={60}
                />
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    
            </div>


        </li>

    </Container>
        )
        
export default FileList;